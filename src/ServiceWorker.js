const { assets } = global.serviceWorkerOption
const CACHE_NAME = (new Date).toISOString()

let assetsToCache = assets.map(path => new URL(path, global.location).toString())

// Runs only once per life time of a service worker
self.addEventListener('install', (event) => {
  // console.log(`[SW] Install beginning`)
  event.waitUntil(
    global.caches.open(CACHE_NAME)
      .then(cache => cache.addAll(assetsToCache))
      // .then(() => console.log(`[SW] Installation complete. Assets cached: ${ assetsToCache }`))
  )
})

// Runs only once per life time of a service worker, after a succesful installation
self.addEventListener('activate', event => {
  // console.log(`[SW] Activation beginning`)
  event.waitUntil(
    global.caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => global.caches.delete(key))
      ))
      // .then(() => console.log('[SW]: activate completed.'))
  )
})

// Runs for every single HTTP request
self.addEventListener('fetch', event => {
  // console.log(`[SW] Fetch event`)
  if (event.request.method !== 'GET' || !event.request.url.includes('http')) {
    // console.log('[SW]: fetch event ignored.', event.request.method, event.request.url)
    return
  }

  else {
    function fetchedFromNetwork(response) {
      // console.log('[SW]: fetch response from network.', event.request.url)

      const cacheCopy = response.clone()
      global.caches.open(CACHE_NAME)
        .then(cache => cache.put(event.request, cacheCopy))
        // .then(() => console.log('[SW]: fetch response stored in cache.', event.request.url))

      return response
    }

    function unableToResolve () {
      console.log('WORKER: fetch request failed in both cache and network.');
      return new Response('<h1>Service Unavailable</h1>', {
        status: 503,
        statusText: 'Service Unavailable',
        headers: new Headers({
          'Content-Type': 'text/html'
        })
      })
    }

    event.respondWith(
      global.caches.match(event.request)
        .then(cached => {
          // Try and grab a new version in case we reconnect to wifi somehow
          const networked = fetch(event.request)
            .then(fetchedFromNetwork, unableToResolve)
            .catch(unableToResolve)

          return cached || networked
          // console.log('[SW]: fetch event', cached ? '(cached)' : '(network)', event.request.url)
        })
    )
  }
})

// Runs ...
self.addEventListener('message', event => {
  // console.log(`[SW] Message event`)
})

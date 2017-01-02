import React from 'react'
import ReactDOM from 'react-dom'
import ReactServer from 'react-dom/server'
import { Router, createMemoryHistory } from 'react-router'
import Helmet from 'react-helmet'

import { createMarkup } from './utilities'
import { App } from './components/app'
import Routes from './components/routes'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'

function setUpServiceWorker() {
  if (navigator && 'serviceWorker' in navigator) {
    // XXX: We only need a service worker to run on our index route, becuase it has access to the webpack assets tree
    // Also, the service worker is always relative to the DIRECTORY of the current HTML file.
    // http://stackoverflow.com/questions/30336685/404-error-when-trying-to-register-serviceworker
    if (location.pathname === '/') {
      runtime.register()
        .then(() => console.log('Registration complete'))
        .catch(error => console.error(error))
    }
  }
  else {
    console.log('Service workers not supported. No offline-access possible.')
  }
}

if (typeof document !== 'undefined') {
  // Do fancy client-side javascript, like set up a service-worker for off-line caching
  setUpServiceWorker()
}

export default (locals, callback) => {
  const history = createMemoryHistory(locals.path)
  const Template = require('./template.js').default

  const reactApp = createMarkup(
    ReactServer.renderToStaticMarkup(
      <Router history={ history }>{ Routes }</Router>
    ))
  let head = Helmet.rewind()

  const HTML = ReactServer.renderToStaticMarkup(<Template head={ head } reactApp={ reactApp } locals={ locals }/>)

  callback(null, `<!DOCTYPE html>${ HTML }`)
}

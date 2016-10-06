import React from 'react'
import ReactDOM from 'react-dom'
import ReactServer from 'react-dom/server'
import { Router, createMemoryHistory } from 'react-router'
import Helmet from 'react-helmet'

import { createMarkup } from './utilities.js'
import { App } from './components/app.js'
import Routes from './components/routes.js'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'

function setUpServiceWorker() {
  if (navigator && 'serviceWorker' in navigator) {
    const registration = runtime.register()
      .then(() => console.log('Registration complete'))
      .catch(error => console.error(error))
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

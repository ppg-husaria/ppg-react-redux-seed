import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import reducers from './reducers'

import App from './App';

import { HomeComponent, HelpComponent, PageMissingComponent } from './routes';

import './index.css';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

class Err extends React.Component {
  render() {
    return <p>Error</p>
  }
}

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: HomeComponent },
  childRoutes: [
    { path: 'help', component: HelpComponent },
    { path: '*', component: Err }
  ]
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
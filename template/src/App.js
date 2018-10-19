import React, { Component } from 'react'
{{#if router}}
import Router from './router'
{{else}}
import Home from './page/home'
{{/if}}
{{#if_eq storeConfig 'mobx'}}
import store from './store'
import { Provider } from 'mobx-react'
{{/if_eq}}
{{#if_eq storeConfig 'redux'}}
import { Provider } from 'react-redux'
import store from './redux'
{{/if_eq}}

class App extends Component {
  render () {
    return (
      {{#if store}}
      <Provider store={store}>
      {{/if}}
      {{#if router}}
      <Router />
      {{else}}
      <Home />
      {{/if}}
      {{#if store}}
      </Provider>
      {{/if}}
    )
  }
}

export default App

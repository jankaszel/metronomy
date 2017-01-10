import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import MetronomyApp from './components/MetronomyApp'

export default () => (
  <Provider store={store}>
    <MetronomyApp />
  </Provider>
)

import React from 'react'
import {NavigatorIOS} from 'react-native'
import {Provider} from 'react-redux'
import store from './store'
import MetronomyApp from './components/MetronomyApp'

export default () => (
  <Provider store={store}>
    <NavigatorIOS
        initialRoute={{
          component: MetronomyApp,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
  </Provider>
)

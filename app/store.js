import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const middleware = new Array(thunk, promise);

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger())
}

export default createStore(rootReducer, applyMiddleware(...middleware))

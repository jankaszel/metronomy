import {combineReducers} from 'redux'
import tempoReducer from './tempo'

export default combineReducers({
  tempo: tempoReducer
})

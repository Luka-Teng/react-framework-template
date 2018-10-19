import template from './template'
import { combineReducers } from 'redux'

// combineReducers根据key值映射到对应state的key上
// combineReducers({a}) 等同于 {a: a(state.a, action)}
export default combineReducers({
  template
})

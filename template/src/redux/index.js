import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import asyncRedux from './middleware/asyncRedux'
import sideEffect from './sideEffect'
// 判断是浏览器环境还是node环境
const initialState = typeof window !== 'undefined' ? window.__INITIAL_STATE__ : {}

export default createStore(
  reducer,
  initialState,
  applyMiddleware(asyncRedux)
)

asyncRedux.run(sideEffect)

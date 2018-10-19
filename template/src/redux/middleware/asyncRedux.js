// redux的middleware借鉴了面向切面的装饰器模式，
// applyMiddleware相当于遍历装饰store内部的distpach方法
// store: store实例
// next: 下一个middleware的store.dispatch
// action: action变量
// 注意事项，当前action内部不能再dispatch同名action，否则会出错

let actionList = []
let actionEvents = {}

const asyncRedux = store => next => action => {
  // 判断action.type是否存在在list中
  const actionName = actionList.find(item => item === action.type)
  if (actionName) {
    // 直接返回，dispatch进入异步后会直接返回该方法的运行结果，一般为promise
    return actionEvents[actionName](action, store.dispatch)
  } else {
    next(action)
  }
}

asyncRedux.run = (_actionEvents) => {
  actionEvents = _actionEvents
  actionList = [...Object.keys(_actionEvents)]
}

export default asyncRedux

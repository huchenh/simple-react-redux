export default function createStore(reducer) {
  let state;
  let listeners = [];

  // 获取state
  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state,action);
    listeners.forEach(fn => fn())
  }

  function subscribe(listener) {
    listeners.push(listener)
    return function() {
      listeners = listeners.filter(fn => fn !== listener);
    }
  }
  // 初始化state
  dispatch({type: '@@TYPE/REDUX_INIT'})

  return {
    dispatch,
    getState,
    subscribe
  }
}
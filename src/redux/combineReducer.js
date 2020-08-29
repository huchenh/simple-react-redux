export default function combineReducer(reducers) {
  const reducerKeys = Object.keys(reducers);
  let hasChanged = false; // 记录本次派发动作是否引起状态的修改
  return function(state={}, action) {
    const nextState = {};
    for(let i=0; i < reducerKeys.length; i++ ) {
      const key = reducerKeys[i];
      const previousStateForKey = state[key];
      const reducer = reducers[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  }
}

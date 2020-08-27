export default function bindActionCreators(actionCreators, dispatch) {
  function bindActionCreator(actionCreators, dispatch) {
    return (...args) => dispatch(actionCreators(...args)); 
  }

  if(typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  }

  const boundActionCreators = {}

  for(let key in actionCreators) {
    boundActionCreators[key] = bindActionCreator(actionCreators[key], dispatch)
  }
  return boundActionCreators;
}
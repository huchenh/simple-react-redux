import * as type from '../action-type';

const initState = {number: 0};

export default function(state=initState, action) {
  switch(action.type) {
    case type.ADD2:
      return {number: state.number + 1}
    case type.MUNIS2:
      return {number: state.number - 1}
    default :
      return state;
  }
}

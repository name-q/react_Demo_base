// (reducer function)

import {INCREMENT,DECREMENT} from './action-types'

export function counter(state = 0,action) {

  console.log('counter()',state,action);
  switch (action.type) {
    case INCREMENT:
      return state + action.data
      break;
    case DECREMENT:
      return state - action.data
      break;
    default:
      return state
  }

}

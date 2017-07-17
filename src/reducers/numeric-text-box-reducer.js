import {CHANGE_INPUT} from '../actions';

export function step(state = 1, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return action.step;
    default:
      return state;
  }
}


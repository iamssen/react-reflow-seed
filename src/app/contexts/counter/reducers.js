import {ADD, SUBTRACT} from './actions';

export function count(state = 0, action) {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUBTRACT:
      return state - 1;
  }
  return state;
}
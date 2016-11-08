import {LOGIN, LOGOUT} from './actions';

export function userInfo(state = null, action) {
  if (action.type === LOGIN) {
    return action.userInfo;
  } else if (action.type === LOGOUT) {
    return null;
  }
  return state;
}
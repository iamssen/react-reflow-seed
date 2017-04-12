import { login, logout } from '../actions';

export default {
  mapState: observe => observe('userInfo'),
  mapHandlers: ({dispatch}) => ({
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  }),
};
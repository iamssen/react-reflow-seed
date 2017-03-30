import {logout, login} from '../context';
import {UserInfo} from '../types';

export type UserInfoProps = {
  userInfo: UserInfo,
  login: () => void,
  logout: () => void,
}

export default {
  mapState: observe => observe('userInfo'),
  mapHandlers: ({dispatch}) => ({
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  })
}
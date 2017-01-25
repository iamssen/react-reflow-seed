import {provide} from 'react-reflow';
import {UserInfo} from '../states/userInfo';
import login from '../actions/login';
import logout from '../actions/logout';

export type Props = {
  userInfo: UserInfo,
  login: () => void,
  logout: () => void,
}

export default provide(
  observe => observe('userInfo'),
  ({dispatch}) => ({
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  })
)
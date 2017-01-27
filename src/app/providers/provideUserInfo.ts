import {provide} from 'react-reflow';
import {UserInfo, logout, login} from '../context';

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
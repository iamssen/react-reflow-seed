import {provide} from 'react-reflow';
import {add, subtract, UserInfo} from '../context';

export type Props = {
  add: () => void,
  subtract: () => void,
  userInfo: UserInfo,
  count: number,
}

export default provide(
  observe => observe('count', 'userInfo'),
  ({dispatch}) => ({
    add: () => dispatch(add()),
    subtract: () => dispatch(subtract()),
  })
)
import {provide} from 'react-reflow';
import add from '../actions/add';
import subtract from '../actions/subtract';
import {UserInfo} from '../../../states/userInfo';

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
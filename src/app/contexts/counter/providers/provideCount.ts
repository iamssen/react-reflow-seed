import {provide} from 'react-reflow';
import {add, subtract} from '../context';

export type Props = {
  add: () => void,
  subtract: () => void,
  count: number,
}

export default provide(
  observe => observe('count'),
  ({dispatch}) => ({
    add: () => dispatch(add()),
    subtract: () => dispatch(subtract()),
  })
)
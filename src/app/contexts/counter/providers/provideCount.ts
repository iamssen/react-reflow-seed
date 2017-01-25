import {provide} from 'react-reflow';
import add from '../actions/add';
import subtract from '../actions/subtract';

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
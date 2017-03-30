import {add, subtract} from '../context';

export type CountProps = {
  add: () => void,
  subtract: () => void,
  count: number,
}

export default {
  mapState: observe => observe('count'),
  mapHandlers: ({dispatch}) => ({
    add: () => dispatch(add()),
    subtract: () => dispatch(subtract()),
  })
}

// export default provide(
//   observe => observe('count'),
//   ({dispatch}) => ({
//     add: () => dispatch(add()),
//     subtract: () => dispatch(subtract()),
//   })
// )
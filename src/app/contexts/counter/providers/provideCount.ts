import { add, subtract } from '../actions';

export default {
  mapState: observe => observe('count'),
  mapHandlers: ({dispatch}) => ({
    add: () => dispatch(add()),
    subtract: () => dispatch(subtract()),
  }),
};
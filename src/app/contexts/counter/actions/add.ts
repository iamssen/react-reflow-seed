import {ActionTools} from 'react-reflow';

export default () => ({observe, dispatch}:ActionTools) => {
  observe('count').first().subscribe(({count}) => {
    dispatch({
      count: count + 1,
    })
  })
}
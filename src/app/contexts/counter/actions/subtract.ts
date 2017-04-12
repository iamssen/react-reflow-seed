import { Tools } from 'react-reflow';

export default () => ({observe, dispatch}: Tools) => {
  observe('count').first().subscribe(({count}) => {
    dispatch({
      count: count - 1,
    });
  });
}
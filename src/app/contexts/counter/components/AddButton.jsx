import React from 'react';
import {add} from '../actions';

export class AddButton extends React.Component {
  static contextTypes = {
    dispatch: React.PropTypes.func,
  }
  
  render() {
    return (
      <button onClick={() => this.context.dispatch(add())}>
        Add
      </button>
    )
  }
}
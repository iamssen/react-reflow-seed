import React from 'react';
import {subtract} from '../actions';

export class SubtractButton extends React.Component {
  static contextTypes = {
    dispatch: React.PropTypes.func,
  }
  
  render() {
    return (
      <button onClick={() => this.context.dispatch(subtract())}>
        Subtract
      </button>
    )
  }
}
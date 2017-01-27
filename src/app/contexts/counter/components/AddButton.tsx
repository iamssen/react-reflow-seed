import * as React from 'react';
import {CountProps} from '../context';
import {Button} from 'components';

export default class extends React.Component<CountProps, {}> {
  render() {
    return (
      <Button onClick={this.props.add}>Add</Button>
    )
  }
}
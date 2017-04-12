import { Button } from 'components';
import * as React from 'react';
import { CountProps } from '../types';

export default class extends React.Component<CountProps, {}> {
  render() {
    return (
      <Button onClick={this.props.add}>Add</Button>
    );
  }
}
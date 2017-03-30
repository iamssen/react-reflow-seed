import * as React from 'react';
import styled from 'styled-components';
import {CountProps} from '../types';
import {Button as _Button} from 'components';

const Button = styled(_Button)`
  border: 3px solid yellow;
`

export default class extends React.Component<CountProps, {}> {
  render() {
    return (
      <Button onClick={this.props.subtract}>Subtract</Button>
    )
  }
}
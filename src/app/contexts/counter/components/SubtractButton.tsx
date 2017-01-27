import * as React from 'react';
import styled from 'styled-components';
import {CountProps} from '../context';
import {Component as _Button} from 'components/Button';

const Button = styled(_Button)`
  border: 3px solid red;
`

export default class extends React.Component<CountProps, {}> {
  render() {
    return (
      <Button onClick={this.props.subtract}>Subtract</Button>
    )
  }
}
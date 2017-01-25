import * as React from 'react';
import styled from 'styled-components';
import provideCount, {Props} from '../providers/provideCount';
import {Component as _Button} from 'components/Button';

const Button = styled(_Button)`
  border: 3px solid red;
`

export {default as provide, Props} from '../providers/provideCount';

export class Component extends React.Component<Props, {}> {
  render() {
    return (
      <Button onClick={this.props.subtract}>Subtract</Button>
    )
  }
}

export default provideCount(Component);
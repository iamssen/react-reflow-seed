import * as React from 'react';
import styled from 'styled-components';

type Props = {
  className: string,
  onClick: () => void,
  children: string,
}

export class Component extends React.Component<Props, {}> {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default styled(Component)`
  font-size: 13px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: transparent;
`
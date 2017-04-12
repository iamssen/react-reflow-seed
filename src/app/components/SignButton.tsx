import * as React from 'react';
import styled from 'styled-components';
import { UserInfoProps } from '../types';

export class Component extends React.Component<UserInfoProps & {className: string}, {}> {
  render() {
    //debugger;
    return this.props.userInfo
      ? (
        <button className={this.props.className} onClick={this.props.logout}>
          Logout - {this.props.userInfo.name}
        </button>
      )
      : (
        <button className={this.props.className} onClick={this.props.login}>
          Login
        </button>
      );
  }
}

export const style: string = `// styled
  border: 2px solid darkslateblue;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
`;

export default styled(Component)`${style}`;
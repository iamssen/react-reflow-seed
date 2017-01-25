import * as React from 'react';
import styled from 'styled-components';
import provideUserInfo, {Props} from '../providers/provideUserInfo';

export {default as provide, Props} from '../providers/provideUserInfo';

export class View extends React.Component<Props & {className}, {}> {
  render() {
    return this.props.userInfo
      ? (
        <button className={this.props.className} onClick={this.props.logout}>
          Logout - {this.props.userInfo.name}
        </button>)
      : (
        <button className={this.props.className} onClick={this.props.login}>
          Login
        </button>)
  }
}

export const style: string = `// styled
  border: 2px solid darkslateblue;
  padding: 10px;
  font-size: 15px;
  font-weight: bold;
`

export default provideUserInfo(styled(View)`${style}`);
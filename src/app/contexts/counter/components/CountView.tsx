import * as React from 'react';
import {UserInfoProps} from '../context';

export default class extends React.Component<UserInfoProps, {}> {
  render() {
    return (
      <p>
        {this.props.count}
        {
          this.props.userInfo
            ? (
              <span> {this.props.userInfo.name}</span>
            )
            : null
        }
      </p>
    )
  }
}

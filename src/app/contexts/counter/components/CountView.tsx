import * as React from 'react';
import {CountProps, UserInfoProps} from '../types';

export default class extends React.Component<UserInfoProps & CountProps, {}> {
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

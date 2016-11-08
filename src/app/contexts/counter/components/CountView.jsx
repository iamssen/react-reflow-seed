import React from 'react';

export class CountView extends React.Component {
  static contextTypes = {
    count: React.PropTypes.number,
    userInfo: React.PropTypes.object,
  }
  
  render() {
    const UserInfo = this.context.userInfo ? (
      <span> {this.context.userInfo.name}</span>
    ) : null;
    
    return (
      <p>{this.context.count}{UserInfo}</p>
    )
  }
}
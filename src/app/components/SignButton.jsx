import React from 'react';
import {login, logout} from '../actions';

export class SignButton extends React.Component {
  static contextTypes = {
    userInfo: React.PropTypes.object,
    dispatch: React.PropTypes.func,
  }
  
  render() {
    return this.context.userInfo
      ? (<button onClick={this.onLogout}>Logout - {this.context.userInfo.name}</button>)
      : (<button onClick={this.onLogin}>Login</button>);
  }
  
  onLogin = () => {
    this.context.dispatch(login());
  }
  
  onLogout = () => {
    this.context.dispatch(logout());
  }
}
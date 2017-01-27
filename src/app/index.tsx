import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import {Router, hashHistory, Link, IndexLink} from 'react-router';
import AppContext, {SignButton, A, B, Counter} from './context';
import {horizontalList} from 'styles';

const history = hashHistory;

// React App Component
class App extends React.Component<{className}, {}> {
  render() {
    return (
      <AppContext>
        <div className={this.props.className}>
          <div className="auth">
            <SignButton/>
          </div>
          <ul className="menu">
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="/a">A</Link></li>
            <li><Link to="/b">B</Link></li>
            <li><Link to="/counter">Counter</Link></li>
          </ul>
          <div className="contents-container">
            {this.props.children}
          </div>
        </div>
      </AppContext>
    );
  }
}

const StyledApp = styled(App)`
  .auth {
    align-self: flex-end;
  }
  
  ul.menu {
    ${ horizontalList(10) }
    margin: 10px 0 10px 0;
  }
  
  div.contents-container {
    background-color: #eeeeee;
    margin-top: 20px;
  }
`

// View Component
const Index = () => {
  return <div>Index...</div>;
}

// React Router Config
const routeContents = [
  {path: '/a', component: A},
  {path: '/b', component: B},
  {path: '/counter', component: Counter},
]

const routes = {
  path: '/',
  component: StyledApp,
  indexRoute: {component: Index},
  childRoutes: routeContents,
}

// DOM Render
ReactDOM.render((
  <Router history={history} routes={routes}/>
), document.querySelector('#app'));
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import { horizontalList } from 'styles';
import { A, B, Counter, SignButton } from './components';
import AppContext from './context';

class App extends React.Component<{className}, {}> {
  render() {
    return (
      <div>
        <AppContext>
          <HashRouter>
            <div className={this.props.className}>
              <div className="auth">
                <SignButton/>
              </div>
              <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/a">A</Link></li>
                <li><Link to="/b">B</Link></li>
                <li><Link to="/counter">Counter</Link></li>
              </ul>
              <div className="contents-container">
                <Route exact path="/" component={Index}/>
                <Route path="/a" component={A}/>
                <Route path="/b" component={B}/>
                <Route path="/counter" component={Counter}/>
              </div>
            </div>
          </HashRouter>
        </AppContext>
      </div>
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
`;

// View Component
const Index = () => <div>Index...</div>;

// DOM Render
ReactDOM.render(<StyledApp/>, document.querySelector('#app'));

if (module.hot) module.hot.accept();

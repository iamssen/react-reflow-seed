import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Link, IndexLink} from 'react-router';
import {createContext} from 'react-reflow';
import {userInfo} from './reducers';
import {SignButton} from './components/SignButton';
import A from './contexts/a';
import B from './contexts/b';
import Counter from './contexts/counter';
import '../shared/index.less';
import './index.less';

const history = hashHistory;
const routeCache = {};

// Reflow App Context
const AppContext = createContext()
  .reducers({userInfo})
  .constants({routeCache})
  .toComponent();

// React App Component
class App extends React.Component {
  render() {
    return (
      <AppContext>
        <div className="App">
          <div>
            <SignButton/>
          </div>
          <ul>
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="/a">A</Link></li>
            <li><Link to="/b">B</Link></li>
            <li><Link to="/counter">Counter</Link></li>
          </ul>
          <div>
            {this.props.children}
          </div>
        </div>
      </AppContext>
    );
  }
  
  componentWillMount() {
    routeCache.location = this.props.location;
    routeCache.params = this.props.params;
  }
  
  componentWillReceiveProps(nextProps) {
    routeCache.location = nextProps.location;
    routeCache.params = nextProps.params;
  }
}

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
  component: App,
  indexRoute: {component: Index},
  childRoutes: routeContents,
}

// DOM Render
ReactDOM.render((
  <Router history={history} routes={routes}/>
), document.querySelector('#app'));
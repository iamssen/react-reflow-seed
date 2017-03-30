import {createContext, provide} from 'react-reflow';
import _SignButton from './components/SignButton';
import _login from './actions/login';
import userInfo from './states/userInfo';
import provideUserInfo from './providers/provideUserInfo';

// actions
const login = () => {
  console.log('wrapped(login())');
  return _login();
}

export {default as logout} from './actions/logout';
export {login};

// contexts
export {default as A} from './contexts/a';
export {default as B} from './contexts/b';
export {default as Counter} from './contexts/counter';

// components
const SignButton = provide(provideUserInfo)(_SignButton);
export {SignButton};

// context
export default createContext({
  state: {
    userInfo,
  }
})
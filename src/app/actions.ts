import _login from './actions/login';

export const login = () => {
  console.log('wrapped(login())');
  return _login();
};

export { default as logout } from './actions/logout';
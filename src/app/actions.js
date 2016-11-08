export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login() {
  return {
    type: LOGIN,
    userInfo: {
      name: 'User' + Math.floor(Math.random() * 1000)
    }
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}
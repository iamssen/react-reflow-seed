import {createContext} from 'react-reflow';
import userInfo, {UserInfo} from './states/userInfo';
import provideUserInfo, {Props as UserInfoProps} from './providers/provideUserInfo';
import SignButton$ from './components/SignButton';
import login$ from './actions/login';
import logout from './actions/logout';
import A from './contexts/a';
import B from './contexts/b';
import Counter from './contexts/counter';

const SignButton = provideUserInfo(SignButton$);
const login = () => {
  console.log('wrapped(login())');
  return login$();
}

export {
  /* components */ SignButton,
  /* types */ UserInfo,
  /* props */ UserInfoProps,
  /* actions */ login, logout,
  /* contexts */ A, B, Counter,
}

export default createContext({
  state: {
    userInfo,
  }
})
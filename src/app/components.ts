import { provide } from 'react-reflow';
import _SignButton from './components/SignButton';
import provideUserInfo from './providers/provideUserInfo';

export const SignButton = provide(provideUserInfo)(_SignButton);

export { default as A } from './contexts/a';
export { default as B } from './contexts/b';
export { default as Counter } from './contexts/counter';
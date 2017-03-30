import { createContext, provide } from 'react-reflow';
import count from './states/count';
import provideUserInfo from '../../providers/provideUserInfo';
import provideCount from './providers/provideCount';
import _AddButton from './components/AddButton';
import _CountView from './components/CountView';
import _SubtractButton from './components/SubtractButton';

// actions
export { default as add } from './actions/add';
export { default as subtract } from './actions/subtract';

// components
const AddButton = provide(provideCount)(_AddButton);
const SubtractButton = provide(provideCount)(_SubtractButton);
const CountView = provide(provideCount, provideUserInfo)(_CountView);
export { AddButton, SubtractButton, CountView };

// context
export default createContext({
  state: {
    count,
  },
});
import { provide } from 'react-reflow';
import provideUserInfo from '../../providers/provideUserInfo';
import _AddButton from './components/AddButton';
import _CountView from './components/CountView';
import _SubtractButton from './components/SubtractButton';
import provideCount from './providers/provideCount';

export const AddButton = provide(provideCount)(_AddButton);
export const SubtractButton = provide(provideCount)(_SubtractButton);
export const CountView = provide(provideCount, provideUserInfo)(_CountView);
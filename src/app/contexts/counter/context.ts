import {createContext} from 'react-reflow';
import add from './actions/add';
import subtract from './actions/subtract';
import count from './states/count';
import {UserInfo} from '../../context';
import provideUserInfo, {Props as UserInfoProps} from './providers/provideUserInfo';
import provideCount, {Props as CountProps} from './providers/provideCount';
import AddButton$ from './components/AddButton';
import CountView$ from './components/CountView';
import SubtractButton$ from './components/SubtractButton';

const AddButton = provideCount(AddButton$);
const SubtractButton = provideCount(SubtractButton$);
const CountView = provideUserInfo(CountView$);

export {
  /* components */ AddButton, SubtractButton, CountView,
  /* types */ UserInfo,
  /* props */ UserInfoProps, CountProps,
  /* actions */ add, subtract,
}

export default createContext({
  state: {
    count,
  }
})
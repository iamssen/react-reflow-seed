import * as React from 'react';
import {createContext} from 'react-reflow';
import AddButton from './components/AddButton';
import SubtractButton from './components/SubtractButton';
import CountView from './components/CountView';
import count from './states/count';

const Context = createContext({
  state: {
    count,
  }
})

export default () => {
  return (
    <Context>
      <div>
        <div>
          <CountView/>
        </div>
        <div>
          <AddButton/>
          <SubtractButton/>
        </div>
      </div>
    </Context>
  )
}
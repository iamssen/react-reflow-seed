import React from 'react';
import {createContext} from 'react-reflow';
import {count} from './reducers';
import {AddButton} from './components/AddButton';
import {SubtractButton} from './components/SubtractButton';
import {CountView} from './components/CountView';

const Context = createContext()
  .reducers({count})
  .toComponent()

const Component = () => {
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

export default Component;
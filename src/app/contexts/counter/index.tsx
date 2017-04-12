import * as React from 'react';
import { AddButton, CountView, SubtractButton } from './components';
import Context from './context';

export default () => (
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
);
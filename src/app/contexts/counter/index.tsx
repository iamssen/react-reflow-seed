import * as React from 'react';
import Context, { AddButton, CountView, SubtractButton } from './context';

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
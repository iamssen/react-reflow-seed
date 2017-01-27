import * as React from 'react';
import Context, {CountView, AddButton, SubtractButton} from './context';

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
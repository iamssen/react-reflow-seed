import * as React from 'react';
import provideCount, {Props} from '../providers/provideCount';
import {Button} from 'components';

export {default as provide, Props} from '../providers/provideCount';

export class Component extends React.Component<Props, {}> {
  render() {
    return (
      <Button onClick={this.props.add}>Add</Button>
    )
  }
}

export default provideCount(Component);
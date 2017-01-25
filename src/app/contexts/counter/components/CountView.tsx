import * as React from 'react';
import provideUserInfo, {Props} from '../providers/provideUserInfo';

export {default as provide, Props} from '../providers/provideUserInfo';

export class Component extends React.Component<Props, {}> {
  render() {
    return (
      <p>
        {this.props.count}
        {
          this.props.userInfo
            ? (
              <span> {this.props.userInfo.name}</span>
            )
            : null
        }
      </p>
    )
  }
}

export default provideUserInfo(Component);
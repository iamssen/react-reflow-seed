import * as React from 'react';
import styled from 'styled-components';

export const Component = ({className}) => {
  return (
    <div className={className}>A</div>
  )
}

export default styled(Component)`
  color: blue;
`;
// @flow
import * as React from 'react';

import styled from 'styled-components';

export const StyledLabel: React.ComponentType<*> = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  line-height: 0;

  > *:first-child {
    margin-right: 5px;
  }
`;

export default StyledLabel;

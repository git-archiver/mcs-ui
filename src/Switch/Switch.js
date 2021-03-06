// @flow
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  type ThemeProps,
  type Kind,
  type ComponentType,
} from '../utils/type.flow';

export type Props = { checked?: boolean, kind?: Kind };
type InnerProps = { checked?: boolean, kind: Kind } & ThemeProps;

const Switch: ComponentType<Props> = styled.div`
  position: relative;
  height: 50px;
  width: 82px;
  box-sizing: border-box;
  border-radius: 24px;
  transition: background-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.2s;
  cursor: pointer;
  background-color: ${({ theme, checked, kind }: InnerProps) =>
    checked ? theme.color[kind] : theme.color.grayDark};
  transform-origin: 0 0;

  &::after {
    content: ' ';
    position: absolute;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: ${({ theme }: InnerProps) => theme.color.white};
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.17);
    top: 3px;
    left: ${({ checked }: InnerProps) => (checked ? '32px' : 0)};
    transition: left cubic-bezier(0.47, 0, 0.75, 0.72) 0.2s;
    margin: 0 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

Switch.displayName = 'Switch';
Switch.propTypes = {
  kind: PropTypes.string,
  checked: PropTypes.bool,
};
Switch.defaultProps = {
  kind: 'success',
  checked: false,
};

export default Switch;

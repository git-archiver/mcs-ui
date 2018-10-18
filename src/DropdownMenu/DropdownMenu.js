// @flow
import * as React from 'react';
import { Overlay } from 'react-overlay-pack';
import { StyledMenu } from './styled-components';
import { BOTTOM_RIGHT } from './position.config';

type RenderProps = {
  isOpen: boolean,
  open: () => void,
  close: () => void,
  toggle: () => void,
};
export type Props = {
  children: React.Node | (RenderProps => React.Node),
  itemRenderer: RenderProps => React.Node,
  position: Object,
  // Note: innerRef for the problem of outside click in dialog
  innerRef?: React.ElementRef<*>,
};
type State = { isOpen: boolean };

class DropdownMenu extends React.Component<Props, State> {
  static defaultProps = {
    position: BOTTOM_RIGHT,
  };

  state = { isOpen: false };

  target = React.createRef();

  onToggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  onHide = () => this.setState(() => ({ isOpen: false }));

  onOpen = () => this.setState(() => ({ isOpen: true }));

  render() {
    const { children, itemRenderer, innerRef, position } = this.props;
    const { isOpen } = this.state;
    const { onToggle, onHide, onOpen, target } = this;
    const renderProps: RenderProps = {
      isOpen,
      close: onHide,
      open: onOpen,
      toggle: onToggle,
    };

    return (
      <React.Fragment>
        <div
          ref={target}
          onClick={onToggle}
          onKeyPress={onToggle}
          role="button"
          tabIndex="0"
          style={{ display: 'inline-block' }}
        >
          {typeof children === 'function' ? children(renderProps) : children}
        </div>

        <Overlay
          show={isOpen}
          resize
          target={target}
          onOutsideClick={onHide}
          {...position}
        >
          <StyledMenu key="menu" ref={innerRef}>
            {itemRenderer(renderProps)}
          </StyledMenu>
        </Overlay>
      </React.Fragment>
    );
  }
}

export default DropdownMenu;

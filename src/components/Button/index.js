import PropTypes from 'prop-types';
import Spinner from '../Spinner';

import { StyledButton } from './styles';

export function Button({
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  danger = false,
  onConfirm,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      danger={danger}
      onClick={onConfirm}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
  onConfirm: PropTypes.func,
};

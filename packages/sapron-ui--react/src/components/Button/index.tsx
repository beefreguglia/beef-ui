import { ReactNode } from 'react';
import { ButtonContainer, IconContainer, StyledButton } from './styles';
import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';

export interface ButtonProps extends HTMLStyledProps<typeof StyledButton> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quintenary';
  isFull?: boolean;
  leftIcon?: ReactNode;
  children: ReactNode;
}

export function Button({
  children,
  disabled,
  leftIcon,
  isFull,
  ...props
}: ButtonProps) {
  const tap = !disabled;
  return (
    <ButtonContainer
      whileTap={tap ? { scale: 0.8 } : { scale: 1 }}
      isFull={isFull}
    >
      <StyledButton disabled={disabled} {...props}>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        {children}
      </StyledButton>
    </ButtonContainer>
  );
}

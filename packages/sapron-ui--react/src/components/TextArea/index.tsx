import { ReactNode } from 'react';
import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import {
  IconContainer,
  StyledTextArea,
  TextAreaContainer,
  TextAreaErrorContainer,
} from './styles';
import { Warning } from 'phosphor-react';
import { Text } from '../Text';
import { Label } from '../Label';

export interface TextAreaProps extends HTMLStyledProps<typeof StyledTextArea> {
  errorMessage?: string;
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  rightIconAction?: () => void;
  id: string;
}
export function TextArea({
  errorMessage,
  leftIcon,
  rightIcon,
  rightIconAction,
  label,
  id,
  ...props
}: TextAreaProps) {
  const hasError = !!errorMessage;
  const hasLabel = !!label;
  const hasRightIconAction = rightIconAction !== undefined;
  return (
    <div style={{ width: '100%' }}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <TextAreaContainer hasError={hasError} hasLabel={hasLabel}>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <StyledTextArea id={id} {...props} />
        {rightIcon && (
          <IconContainer
            onClick={rightIconAction}
            hasRightIconAction={hasRightIconAction}
          >
            {rightIcon}
          </IconContainer>
        )}
      </TextAreaContainer>
      {hasError && (
        <TextAreaErrorContainer>
          <Warning size={14} color="#FF2732" />
          <Text size="$sm" color="$red500">
            {errorMessage}
          </Text>
        </TextAreaErrorContainer>
      )}
    </div>
  );
}

TextArea.displayName = 'TextArea';

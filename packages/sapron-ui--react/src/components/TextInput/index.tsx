import { ReactNode } from 'react';
import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import {
  IconContainer,
  Input,
  TextInputContainer,
  TextInputErrorContainer,
} from './styles';
import { Warning } from 'phosphor-react';
import { Text } from '../Text';
import { Label } from '../Label';

export interface TextInputProps extends HTMLStyledProps<typeof Input> {
  errorMessage?: string;
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  rightIconAction?: () => void;
  id: string;
}
export function TextInput({
  errorMessage,
  leftIcon,
  rightIcon,
  rightIconAction,
  label,
  id,
  ...props
}: TextInputProps) {
  const hasError = !!errorMessage;
  const hasLabel = !!label;
  const hasRightIconAction = rightIconAction !== undefined;
  return (
    <div style={{ width: '100%' }}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <TextInputContainer hasError={hasError} hasLabel={hasLabel}>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <Input id={id} {...props} />
        {rightIcon && (
          <IconContainer
            onClick={rightIconAction}
            hasRightIconAction={hasRightIconAction}
          >
            {rightIcon}
          </IconContainer>
        )}
      </TextInputContainer>
      {hasError && (
        <TextInputErrorContainer>
          <Warning size={14} color="#FF2732" />
          <Text size="$sm" color="$red500">
            {errorMessage}
          </Text>
        </TextInputErrorContainer>
      )}
    </div>
  );
}

TextInput.displayName = 'TextInput';

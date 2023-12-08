import { Check, Warning } from 'phosphor-react';
import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import { css } from '@beefreguglia/beef-ui--react/css';
import {
  CheckboxContainer,
  CheckboxErrorContainer,
  CheckboxIndicator,
  StyledLabel,
} from './styles';
import { Text } from '../Text';

export interface CheckboxProps
  extends HTMLStyledProps<typeof CheckboxContainer> {
  label?: string;
  errorMessage?: string;
  id: string;
}

export function Checkbox({ label, errorMessage, id, ...props }: CheckboxProps) {
  const hasError = !!errorMessage;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <CheckboxContainer id={id} {...props} hasError={hasError}>
          <CheckboxIndicator asChild>
            <Check weight="bold" />
          </CheckboxIndicator>
        </CheckboxContainer>
        {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      </div>
      {hasError && (
        <CheckboxErrorContainer
          className={css({
            '& p': {
              color: '$red500',
            },
            '& svg': {
              color: '$red500',
            },
          })}
        >
          <Warning size={14} />
          <Text size="$sm" color="$red500">
            {errorMessage}
          </Text>
        </CheckboxErrorContainer>
      )}
    </div>
  );
}

Checkbox.displayName = 'Checkbox';

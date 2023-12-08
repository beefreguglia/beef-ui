import { TextInput } from '../TextInput';
import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import {
  CircularButton,
  NumberInputContainer,
  NumberInputErrorContainer,
} from './styles';
import { Minus, Plus, Warning } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';
import { Label } from '../Label';
import { Text } from '../Text';

export interface NumberInputProps extends HTMLStyledProps<typeof TextInput> {
  maxValue?: number;
  minValue?: number;
  value: number;
  onValueChange: Dispatch<SetStateAction<number>>;
  errorMessage?: string;
  label?: string;
  id: string;
}

export function NumberInput({
  maxValue = 25,
  minValue = 0,
  value,
  onValueChange,
  errorMessage,
  label,
  id,
  ...rest
}: NumberInputProps) {
  const isMaxValue = value === maxValue;
  const isMinValue = value === minValue;
  const hasError = !!errorMessage;

  function incresseValue() {
    if (value < maxValue) {
      onValueChange((oldState) => oldState + 1);
    }
  }
  function decreesValue() {
    if (value > minValue) {
      onValueChange((oldState) => oldState - 1);
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {label && <Label htmlFor={id}>{label}</Label>}
      <NumberInputContainer>
        <CircularButton
          type="button"
          onClick={decreesValue}
          disabled={isMinValue}
        >
          <Minus size={10} weight="bold" />
        </CircularButton>
        <div style={{ width: '100%' }}>
          <TextInput
            id={id}
            type="number"
            css={{
              textAlign: 'center',
            }}
            value={value}
            onChange={(e) => {
              if (Number(e.target.value) >= maxValue) {
                return onValueChange(maxValue);
              }
              if (Number(e.target.value) <= minValue) {
                return onValueChange(minValue);
              }
              onValueChange(Number(e.target.value));
            }}
            {...rest}
          />
        </div>
        <CircularButton
          type="button"
          onClick={incresseValue}
          disabled={isMaxValue}
        >
          <Plus size={10} weight="bold" />
        </CircularButton>
      </NumberInputContainer>
      {hasError && (
        <NumberInputErrorContainer>
          <Warning size={14} color="#FF2732" />
          <Text size="$sm" color="$red500">
            {errorMessage}
          </Text>
        </NumberInputErrorContainer>
      )}
    </div>
  );
}

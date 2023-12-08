import { Dispatch, SetStateAction } from 'react';
import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import { TextInput } from './TextInput';
import { Eye, EyeSlash, LockSimple } from 'phosphor-react';

export interface PasswordInputProps extends HTMLStyledProps<typeof TextInput> {
  hasLocketIcon?: boolean;
  type: 'password' | 'text';
  setType: Dispatch<SetStateAction<'password' | 'text'>>;
}

export function PasswordInput({
  type,
  children,
  setType,
  hasLocketIcon,
  ...props
}: PasswordInputProps) {
  function toggleType() {
    setType((oldState) => {
      if (oldState === 'password') {
        return 'text';
      } else {
        return 'password';
      }
    });
  }
  return (
    <TextInput
      leftIcon={
        hasLocketIcon ? <LockSimple color="#394760" size={16} /> : undefined
      }
      rightIcon={
        type === 'password' ? (
          <EyeSlash color="#394760" size={16} />
        ) : (
          <Eye color="#394760" size={16} />
        )
      }
      rightIconAction={toggleType}
      type={type}
      {...props}
    >
      {children}
    </TextInput>
  );
}

TextInput.displayName = 'PasswordInput';

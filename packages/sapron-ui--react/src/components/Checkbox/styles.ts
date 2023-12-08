import { styled } from '@beefreguglia/beef-ui--react/jsx';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Label } from '../Label';

export const CheckboxContainer = styled(Checkbox.Root, {
  base: {
    width: '$4',
    height: '$4',
    backgroundColor: '$white',
    borderRadius: '$xxs',
    lineHeight: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid',
    borderWidth: '1px',
    borderColor: '$gray300 !important',

    '&[data-state="checked"]': {
      backgroundColor: '$blue500',
    },

    '&:focus': {
      border: 'solid',
      borderWidth: '1px',
      borderColor: '$green300 !important',
    },
  },
  variants: {
    hasError: {
      true: {
        border: 'solid',
        borderColor: '$red500 !important',
        borderWidth: '1px',
        '&[data-state="checked"]': {
          borderColor: '$blue500 !important',
        },
      },
    },
  },
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  base: {
    color: '$white',
    width: '$4',
    height: '$4',

    '&[data-state="checked"]': {
      animation: 'slideIn',
      animationDuration: '200ms',
      animationTimingFunction: 'ease-in',
    },

    '&[data-state="unchecked"]': {
      animation: 'slideOut',
      animationDuration: '200ms',
      animationTimingFunction: 'ease-in',
    },
  },
});

export const CheckboxErrorContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
  },
});

export const StyledLabel = styled(Label, {
  base: {
    fontWeight: '$regular !important',
    color: '$gray800',
    fontSize: '$sm',
  },
});

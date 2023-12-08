import { styled } from '@beefreguglia/beef-ui--react/jsx';
import * as Switch from '@radix-ui/react-switch';

export const SwitchContainer = styled(Switch.Root, {
  base: {
    backgroundColor: '$neutralGray50',
    border: 'solid',
    borderWidth: '1px',
    borderColor: '$neutralGray300 !important',
    position: 'relative',
    width: '56px',
    height: '28px',
    borderRadius: '$full',
    cursor: 'pointer',

    '&:focus': {
      borderColor: '$green300 !important',
    },

    '&:hover': {
      borderColor: '$green300 !important',
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

export const SwitchThumbContainer = styled(Switch.Thumb, {
  base: {
    backgroundColor: '$neutralGray50',
    width: '24px',
    height: '24px',
    display: 'block',
    borderRadius: '$full',
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    willChange: 'transform',

    '&[data-state="checked"]': {
      background: '$green500',
      transform: 'translateX(28px)',
    },

    '&[data-state="unchecked"]': {
      background: '$gray100',
    },

    '&:has(input:focus)': {
      borderColor: '$green300',
    },

    '&:has(input:disabled)': {
      cursor: 'not-allowed',
    },
  },
});

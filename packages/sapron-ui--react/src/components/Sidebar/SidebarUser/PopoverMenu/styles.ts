import { styled } from '@beefreguglia/beef-ui--react/jsx';

export const PopoverItem = styled('button', {
  base: {
    all: 'unset',

    fontFamily: '$default',
    textAlign: 'center',

    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$4',
    px: '$4',
    py: '$3',

    cursor: 'pointer',

    '&:first-child': {
      borderTopLeftRadius: '$md',
      borderTopRightRadius: '$md',
    },

    '&:last-child': {
      borderBottomLeftRadius: '$md',
      borderBottomRightRadius: '$md',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$gray100',
      transition: 'all 300ms',
      borderRadius: '$md',
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

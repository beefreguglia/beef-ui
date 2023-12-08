import { styled } from '@beefreguglia/beef-ui--react/jsx';

export const SidebarUserContainer = styled('div', {
  base: {
    margin: '$4',
    padding: '$4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '$md',
    background: '$darkerBlue800',
  },

  variants: {
    isMenuRetracted: {
      true: {
        flexDirection: 'column',
        gap: '$2',
      },
    },
  },
});

export const IconContainer = styled('div', {
  base: {
    padding: '$1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    color: '$gray300',
    cursor: 'pointer',

    _hover: {
      transition: 'all',
      transitionDuration: '300ms',
      color: '$gray100',
    },
  },

  variants: {
    isBaseline: {
      true: {
        alignSelf: 'baseline',
      },
    },
  },
});

export const PopoverItem = styled('button', {
  base: {
    all: 'unset',

    fontFamily: '$default',
    textAlign: 'center',

    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    padding: '$2 $4',

    cursor: 'pointer',

    '&:first-child': {
      borderRadius: '$md $md 0 0',
    },

    '&:last-child': {
      borderRadius: '0 0 $md $md',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$gray100',
      transition: 'all 300ms',
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

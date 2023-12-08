import { styled } from '@beefreguglia/beef-ui--react/jsx';
import { motion } from 'framer-motion';

export const ButtonContainer = styled(motion.div, {
  base: {},
  variants: {
    isFull: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    isFull: false,
  },
});

export const StyledButton = styled('button', {
  base: {
    cursor: 'pointer',
    borderRadius: '$md',
    fontWeight: '$bold',
    fontFamily: '$default',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    px: '$12',
    py: '$2',
    boxSizing: 'border-box',
    width: '100%',

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue500',
        color: '$white',
        border: 'solid',
        borderWidth: '2px',
        borderColor: '$blue500 !important',

        '&:not(:disabled):hover': {
          backgroundColor: '$blue300',
          transition: 'all 300ms',
          border: 'solid',
          borderColor: '$blue300 !important',
        },

        '&:disabled': {
          backgroundColor: '$blue100',
          border: 'solid',
          borderColor: '$blue100 !important',
        },
      },
      secondary: {
        py: '$2',
        px: '$12',
        color: '$darkBlue900',
        backgroundColor: '$white',
        border: 'solid',
        borderWidth: '2px',
        borderColor: '$darkBlue900 !important',

        '&:not(:disabled):hover': {
          backgroundColor: '$darkerBlue50',
          border: 'solid',
          borderColor: '$darkBlue900 !important',
          transition: 'all 300ms',
        },

        '&:disabled': {
          border: 'solid',
          borderColor: '$blue100 !important',
          color: '$blue100',
        },
      },
      tertiary: {
        backgroundColor: 'transparent',
        fontWeight: '$regular',
        textDecoration: 'underline',

        '&:not(:disabled):hover': {
          color: '$gray700',
          transition: 'all 300ms',
        },

        '&:disabled': {
          color: '$gray300',
        },
      },
      quaternary: {
        color: '$gray300',
        justifyContent: 'flex-start',
        background: '$white',
        border: 'solid',
        borderColor: '$white !important',
        borderWidth: '2px',
        fontWeight: 'regular',

        '&:not(:disabled):hover': {
          backgroundColor: '$gray50',
          border: 'solid',
          borderColor: '$gray50 !important',
          transition: 'all 300ms',
        },
        '&:disabled': {
          color: '$gray50',
        },
      },
      quintenary: {
        color: '$gray800',
        background: '$neutralGray100',
        border: 'solid',
        borderColor: '$neutralGray100 !important',
        borderWidth: '2px',
        fontWeight: 'regular',

        '&:not(:disabled):hover': {
          backgroundColor: '$neutralGray300',
          border: 'solid',
          borderColor: '$neutralGray300 !important',
          transition: 'all 300ms',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});

export const IconContainer = styled('div', {
  base: {
    padding: '$1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

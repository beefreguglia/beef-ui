import { styled } from '@beefreguglia/beef-ui--react/jsx';

export const TextInputContainer = styled('div', {
  base: {
    backgroundColor: '$neutralGray50',
    padding: '$2',
    px: '$4',
    borderRadius: '$md',
    boxSizing: 'border-box',
    border: 'solid',
    borderWidth: '1px',
    borderColor: '$neutralGray300 !important',
    display: 'flex',
    gap: '$2',
    alignItems: 'center',

    '&:has(input:focus)': {
      borderColor: '$green300 !important',
    },
    '&:has(input:hover):not(:disabled)': {
      borderColor: '$green300 !important',
    },

    '&:has(input:disabled)': {
      cursor: 'not-allowed',
    },
  },
  variants: {
    hasError: {
      true: {
        border: 'solid',
        borderWidth: '1px',
        borderColor: '$red500',

        '&:has(input:focus)': {
          border: 'solid',
          borderWidth: '1px',
          borderColor: '$red500 !important',
          boxShadow: '0 0 0 1px $red500',
          outline: 0,
        },

        '&:has(input:hover)': {
          border: 'solid',
          borderWidth: '1px',
          borderColor: '$red500',
        },
        '&:has(input:hover):not(:disabled)': {
          borderColor: '$red500',
        },
      },
    },
    hasLabel: {
      true: {
        marginTop: '$2',
      },
    },
  },
});

export const Input = styled('input', {
  base: {
    fontFamily: '$default',
    fontSize: '$md',
    color: '$gray800',
    fontWeight: 'regular',
    background: '$neutralGray50',
    border: 0,
    width: '100%',
    height: '100%',

    '&:focus': {
      outline: '0',
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },

    '&:placeholder': {
      color: '$neutralGray300',
    },

    '&[type="number"]': {
      margin: '0',
      '&::-webkit-inner-spin-button': {
        display: 'none',
      },
      '&::-webkit-outer-spin-button': {
        display: 'none',
      },
    },
  },
});

export const TextInputErrorContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',

    gap: '$2',
    marginTop: '$1',
    padding: '0 $2',
  },
});

export const IconContainer = styled('div', {
  base: {
    padding: '$1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  variants: {
    hasRightIconAction: {
      true: {
        cursor: 'pointer',
      },
    },
  },
});

import { styled } from '@beefreguglia/beef-ui--react/jsx';

export const TextAreaContainer = styled('div', {
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
    height: '120px',

    '&:has(textarea:focus)': {
      borderColor: '$green300 !important',
    },
    '&:has(textarea:hover):not(:disabled)': {
      borderColor: '$green300 !important',
    },

    '&:has(textarea:disabled)': {
      cursor: 'not-allowed',
    },
  },

  variants: {
    hasError: {
      true: {
        border: 'solid',
        borderWidth: '1px',
        borderColor: '$red500 !important',

        '&:has(textarea:focus)': {
          border: 'solid',
          borderWidth: '1px',
          borderColor: '$red500 !important',
          boxShadow: '0 0 0 1px $red500',
          outline: 0,
        },

        '&:has(textarea:hover)': {
          borderColor: '$red500 !important',
        },
        '&:has(textarea:hover):not(:disabled)': {
          borderColor: '$red500 !important',
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

export const StyledTextArea = styled('textarea', {
  base: {
    fontFamily: '$default',
    fontSize: '$md',
    color: '$gray800',
    fontWeight: 'regular',
    background: '$neutralGray50',
    border: 0,
    width: '100%',
    height: '100%',
    resize: 'none',

    '&:focus': {
      outline: 0,
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },

    '&:placeholder': {
      color: '$neutralGray300',
    },
  },
});

export const TextAreaErrorContainer = styled('div', {
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

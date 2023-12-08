import { styled } from '@beefreguglia/beef-ui--react/jsx';
import * as Select from '@radix-ui/react-select';

export const SelectTriggerContainer = styled(Select.Trigger, {
  base: {
    backgroundColor: '$neutralGray50',
    borderRadius: '$md',
    boxSizing: 'border-box',
    fontWeight: '$regular',
    border: 'solid',
    borderColor: '$neutralGray300 !important',
    borderWidth: '1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    cursor: 'pointer',
    outline: 'none',
    paddingY: '$2',
    paddingX: '$4',
    fontSize: '$sm',
    fontFamily: '$default',
    mt: '$2',
    mb: '$1',
    color: '$gray800',

    '&[data-placeholder]': {
      color: '$neutralGray500',
    },

    '&:focus': {
      borderColor: '$green300 !important',
    },

    '&:hover': {
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
        borderColor: '$red500',
        borderWidth: '1px',
      },
    },
  },
});

export const SelectContentContainer = styled(Select.Content, {
  base: {
    backgroundColor: '$neutralGray50',
    borderRadius: '$sm',
    overflow: 'hidden',
    border: 'solid',
    borderWidth: '1px',
    borderColor: '$neutralGray300 !important',
    paddingX: '$4',
    paddingY: '$2',
    boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
    outline: 'none',

    '&:focus': {
      borderColor: '$gray300 !important',
    },

    '&:hover': {
      borderColor: '$gray300 !important',
    },
  },
});

export const SelectErrorContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
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

export const SelectScrollUpButton = styled(Select.ScrollUpButton, {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$neutralGray50',
    paddingY: '$2',
    paddingX: '$4',
    color: '$gray300',

    '&:hover': {
      transition: 'background 100ms ease-in-out',
      backgroundColor: '$gray50',
    },
  },
});

export const SelectScrollDownButton = styled(Select.ScrollDownButton, {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$neutralGray50',
    paddingY: '$2',
    paddingX: '$4',
    color: '$gray300',

    '&:hover': {
      transition: 'background 100ms ease-in-out',
      backgroundColor: '$gray50',
    },
  },
});

export const SelectLabel = styled(Select.Label, {
  base: {
    color: '$neutralGray500',
    fontSize: '$sm',
  },
});

export const SelectItemContainer = styled(Select.Item, {
  base: {
    lineHeight: '$base',
    display: 'flex',
    alignItems: 'center',
    paddingY: '$1',
    paddingX: '$4',
    position: 'relative',
    userSelect: 'none',
    borderWidth: '1px',
    borderRadius: '$md',
    borderColor: 'transparent',
    cursor: 'pointer',
    outline: 'none',

    '&[data-state="checked"]': {
      pl: '$6',
    },
    '&:focus': {
      borderColor: '$green300 !important',
    },

    '&:hover': {
      borderColor: '$green300 !important',
    },
  },
});

export const SelectedItemIndicator = styled(Select.ItemIndicator, {
  base: {
    position: 'absolute',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$green500',
    left: 0,
  },
});

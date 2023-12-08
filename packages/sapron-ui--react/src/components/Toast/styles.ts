import * as Toast from '@radix-ui/react-toast';
import { styled } from '@beefreguglia/beef-ui--react/jsx';
import { Text } from '../Text';
import { H3 } from '../H3';
import { motion } from 'framer-motion';
import { Check, Info, Warning, X } from 'phosphor-react';

export const ToastViewport = styled(Toast.Viewport, {
  base: {
    position: 'fixed',
    top: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
    gap: '$4',
    width: '390px',
    maxWidth: '100vw',
    margin: '0',
    listStyle: 'none',
    zIndex: '999999',
    outline: 'none',
  },
});

export const ToastContainer = styled(motion.div, {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '$4',
    borderRadius: '$md',
  },

  variants: {
    type: {
      success: {
        backgroundColor: '$green50 !important',
      },
      error: {
        backgroundColor: '$red200',
      },
      info: {
        backgroundColor: '$blue100',
      },
    },
  },
  defaultVariants: {
    type: 'success',
  },
});

export const ToastTextsContent = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
});
export const ToastTitleContainer = styled('div', {
  base: {
    display: 'flex',
    gap: '$2',
    alignItems: 'center',
  },
});

export const ToastTitle = styled(H3, {
  base: {
    fontSize: '$md',
    letterSpacing: '-0.02rem',
  },
  variants: {
    type: {
      success: {
        color: '$green300',
      },
      error: {
        color: '$red200',
      },
      info: {
        color: '$blue500',
      },
    },
  },
  defaultVariants: {
    type: 'success',
  },
});

export const ToastDescription = styled(Text, {
  base: {
    fontSize: '$sm',
    marginLeft: '$6',
  },
  variants: {
    type: {
      success: {
        color: '$green300',
      },
      error: {
        color: '$red200',
      },
      info: {
        color: '$blue500',
      },
    },
  },
  defaultVariants: {
    type: 'success',
  },
});

export const StyledCheck = styled(Check, {
  variants: {
    type: {
      success: {
        color: '$green300',
      },
      error: {
        color: '$red200',
      },
      info: {
        color: '$blue500',
      },
    },
  },
});

export const StyledWarning = styled(Warning, {
  variants: {
    type: {
      success: {
        color: '$green300',
      },
      error: {
        color: '$red200',
      },
      info: {
        color: '$blue500',
      },
    },
  },
});

export const StyledInfo = styled(Info, {
  variants: {
    type: {
      success: {
        color: '$green300',
      },
      error: {
        color: '$red200',
      },
      info: {
        color: '$blue500',
      },
    },
  },
});

export const StyledX = styled(X, {
  base: {
    w: '$sm',
    h: '$sm',
    cursor: 'pointer',
    alignSelf: 'baseline',
  },
  variants: {
    type: {
      success: {
        color: '$green300',
      },
      error: {
        color: '$red200',
      },
      info: {
        color: '$blue500',
      },
    },
  },
});

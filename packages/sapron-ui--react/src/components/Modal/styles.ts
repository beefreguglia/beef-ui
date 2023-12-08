import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '@beefreguglia/beef-ui--react/jsx';
import { motion } from 'framer-motion';

export const ModalOverlay = styled(Dialog.DialogOverlay, {
  base: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    inset: 0,
    zIndex: '1',
  },
  variants: {
    hasOverlay: {
      true: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    },
  },
  defaultVariants: {
    hasOverlay: true,
  },
});

export const ModalContainer = styled(motion.div, {
  base: {
    position: 'absolute',
    backgroundColor: '$white',
    padding: '$4',
    display: 'flex',
    zIndex: '10',
  },
  variants: {
    variant: {
      center: {
        justifyContent: 'space-between',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '$md',
      },
      lateral: {
        bottom: '0',
        right: '0',
        height: '100%',
        width: '400px',
        borderTopLeftRadius: '$md ',
        borderBottomLeftRadius: '$md',
      },
    },
  },
  defaultVariants: {
    variant: 'center',
  },
});

export const ModalContent = styled(motion.div, {
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const ModalCloseButton = styled(motion.button, {
  base: {
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$gray50',
    },
  },
  variants: {
    variant: {
      center: {
        alignSelf: 'baseline',
        borderRadius: '$full',
        padding: '$1',
      },
      lateral: {
        backgroundColor: '$white',
        padding: '$4',
        borderTopLeftRadius: '$md',
        borderBottomLeftRadius: '$md',
        position: 'absolute',
        top: '32px',
        right: '400px',
      },
    },
  },
  defaultVariants: {
    variant: 'center',
  },
});

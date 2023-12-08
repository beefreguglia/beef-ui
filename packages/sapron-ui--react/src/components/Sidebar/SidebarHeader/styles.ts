import { motion } from 'framer-motion';
import { styled } from '@beefreguglia/beef-ui--react/jsx';

export const SidebarHeaderContainer = styled('div', {
  base: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '$4',
  },
});

export const IconContainer = styled(motion.div, {
  base: {
    padding: '$1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '$gray300',
    _hover: {
      color: '$white',
      transitionDuration: '300ms',
      transitionProperty: 'all',
    },
  },
  variants: {
    isAbsolute: {
      true: {
        position: 'absolute',
        top: '10%',
        left: '50%',
      },
      false: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
});

export const ActionsContainer = styled('div', {
  base: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },

  variants: {
    isRetractedMenu: {
      true: {
        justifyContent: 'flex-end',
      },
    },
  },
});

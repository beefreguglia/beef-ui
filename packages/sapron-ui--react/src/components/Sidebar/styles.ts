import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { styled } from '@beefreguglia/beef-ui--react/jsx';
import { motion } from 'framer-motion';

export const SidebarContainer = styled(motion.div, {
  base: {
    height: '100%',
    background: '$darkerBlue900',
    display: 'flex',
    flexDirection: 'column',
    py: '$4',
    borderRadius: '0',
  },
});

export const SidebarListContainer = styled(NavigationMenu.List, {
  base: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    marginTop: '$4',
  },
});

export const SidebarItem = styled(NavigationMenu.Item, {
  base: {
    textDecoration: 'none',
    listStyleType: 'none',
    width: '100%',
  },
});

export const SidebarLinkContainer = styled(NavigationMenu.Link, {
  base: {
    cursor: 'pointer',
    textDecoration: 'none',
    userSelect: 'none',
    borderTopRightRadius: '$full',
    borderBottomRightRadius: '$full',
    gap: '$2',
    py: '$2',
    px: '$4',
    width: '70%',

    '&[data-active]': {
      background: '$blue500',
    },
  },

  variants: {
    isMenuRetracted: {
      true: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
});

export const IconContainer = styled('div', {
  base: {
    paddingY: '$1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Item = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  variants: {
    isMenuRetracted: {
      true: {
        justifyContent: 'center',
      },
    },
  },
});

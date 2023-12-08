import { styled } from '@beefreguglia/beef-ui--react/jsx';

export const BoxContainer = styled('div', {
  base: {
    borderRadius: '$md',
    backgroundColor: '$white',
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {
    hasShadow: {
      true: {
        boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
      },
      defaultVariants: {
        hasShadow: false,
      },
    },
  },
});

export const BoxHeaderContainer = styled('header', {
  base: {
    paddingTop: '$4',
    paddingLeft: '$4',
    paddingRight: '$4',
    borderTopRadius: '$md',
  },
});

export const BoxContentContainer = styled('div', {
  base: {
    padding: '$4',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },

  variants: {
    contents: {
      header: {
        borderBottomRadius: '$md',
      },
      footer: {
        borderTopRadius: '$md',
      },
      both: {
        borderRadius: 0,
      },
      nothing: {
        borderRadius: '$md',
      },
    },
  },
  defaultVariants: {
    contents: 'nothing',
  },
});

export const BoxFooterContainer = styled('footer', {
  base: {
    paddingBottom: '$4',
    paddingLeft: '$4',
    paddingRight: '$4',
    borderBottomRadius: 'md',
  },
});

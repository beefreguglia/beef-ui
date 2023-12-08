import { styled } from '@beefreguglia/beef-ui--react/jsx';

export const Container = styled('div', {
  base: {
    backgroundColor: '$blue50',
    width: '100vw',
    height: '100vh',
    display: 'flex',
  },
});

export const ContentContainer = styled('div', {
  base: {
    display: 'flex',
    w: '100%',
    h: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

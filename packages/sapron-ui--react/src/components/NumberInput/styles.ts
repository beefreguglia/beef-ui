import { styled } from '@beefreguglia/beef-ui--react/jsx';
import { Button } from '../Button';

export const NumberInputContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '$6',
    mt: '$2',
  },
});

export const CircularButton = styled(Button, {
  base: {
    aspectRatio: '1 / 1',
    borderRadius: '$full',
    padding: '$1',
  },
});

export const NumberInputErrorContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
  },
});

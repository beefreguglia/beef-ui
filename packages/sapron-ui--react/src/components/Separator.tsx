import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import { styled } from '@beefreguglia/beef-ui--react/jsx';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

export const Separator = styled(SeparatorPrimitive.Root, {
  base: {
    background: '$gray100',
    color: '$gray800',
    borderRadius: '1px',
    border: 'none',
    alignSelf: 'center',

    '&[data-orientation="horizontal"]': {
      height: '1px',
      width: '98%',
    },
    '&[data-orientation="vertical"]': {
      height: '98%',
      width: '1px',
    },
  },
});

export type SeparatorProps = HTMLStyledProps<typeof Separator>;

Separator.displayName = 'Separator';

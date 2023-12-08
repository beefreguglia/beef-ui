import { styled } from '@beefreguglia/beef-ui--react/jsx';
import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';

export const H1 = styled('h1', {
  base: {
    fontFamily: '$default',
    lineHeight: '$shorter',
    fontWeight: '$regular',
    margin: 0,
    color: '$darkerBlue900',
  },
  variants: {
    size: {
      $xxs: { fontSize: '$xxs' },
      $xs: { fontSize: '$xs' },
      $sm: { fontSize: '$sm' },
      $md: { fontSize: '$md' },
      $lg: { fontSize: '$lg' },
      $xl: { fontSize: '$xl' },
      $2xl: { fontSize: '$2xl' },
    },
  },
  defaultVariants: {
    size: '$2xl',
  },
});

export type H1Props = HTMLStyledProps<typeof H1>;

H1.displayName = 'H1';

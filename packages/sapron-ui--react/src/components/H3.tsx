import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import { styled } from '@beefreguglia/beef-ui--react/jsx';

export const H3 = styled('h3', {
  base: {
    fontFamily: '$default',
    lineHeight: '$shorter',
    fontWeight: '$regular',
    margin: 0,
    color: '$gray800',
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
    size: '$lg',
  },
});

export type H3Props = HTMLStyledProps<typeof H3>;

H3.displayName = 'H3';

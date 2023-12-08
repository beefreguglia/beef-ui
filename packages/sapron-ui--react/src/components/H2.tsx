import { styled } from '@beefreguglia/beef-ui--react/jsx';
import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';

export const H2 = styled('h2', {
  base: {
    fontFamily: '$default',
    lineHeight: '$shorter',
    fontWeight: '$bold',
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

export type H2Props = HTMLStyledProps<typeof H2>;

H2.displayName = 'H2';

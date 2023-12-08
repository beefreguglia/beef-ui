import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import { styled } from '@beefreguglia/beef-ui--react/jsx';

export const H4 = styled('h4', {
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
    size: '$md',
  },
});

export type H4Props = HTMLStyledProps<typeof H4>;

H4.displayName = 'H4';

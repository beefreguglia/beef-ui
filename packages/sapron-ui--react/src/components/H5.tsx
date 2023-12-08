import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import { styled } from '@beefreguglia/beef-ui--react/jsx';

export const H5 = styled('h5', {
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
      $xl: { fontSize: '$$xl' },
      $2xl: { fontSize: '$2xl' },
    },
  },
  defaultVariants: {
    size: '$sm',
  },
});

export type H5Props = HTMLStyledProps<typeof H5>;

H5.displayName = 'H5';

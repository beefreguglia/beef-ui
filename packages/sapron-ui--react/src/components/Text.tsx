import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import { styled } from '@beefreguglia/beef-ui--react/jsx';

export const Text = styled('p', {
  base: {
    fontFamily: '$default',
    lineHeight: '$base',
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

export type TextProps = HTMLStyledProps<typeof Text>;

Text.displayName = 'Text';

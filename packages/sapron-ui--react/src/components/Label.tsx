import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import * as LabelPrimitive from '@radix-ui/react-label';
import { styled } from '@beefreguglia/beef-ui--react/jsx';

export const Label = styled(LabelPrimitive.Root, {
  base: {
    fontFamily: '$default',
    lineHeight: '$base',
    margin: 0,
    color: '$gray800',
    fontWeight: 'bold',
    cursor: 'pointer',
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
    size: '$sm',
  },
});

export interface LabelProps extends HTMLStyledProps<typeof Label> {
  isRequired?: boolean;
}

Label.displayName = 'Label';

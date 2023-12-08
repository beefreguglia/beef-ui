import * as Avatar from '@radix-ui/react-avatar';
import { styled } from '@beefreguglia/beef-ui--react/jsx';
import { User } from 'phosphor-react';

export const AvatarContainer = styled(Avatar.Root, {
  base: {
    borderRadius: '$full',
    display: 'inline-block',
    overflow: 'hidden',
    background: '$white',
  },

  variants: {
    size: {
      $xs: {
        width: '$6',
        height: '$6',
      },
      $sm: {
        width: '$8',
        height: '$8',
      },
      $md: {
        width: '$12',
        height: '$12',
      },
      $lg: {
        width: '$16',
        height: '$16',
      },
    },
  },

  defaultVariants: {
    size: '$md',
  },
});

export const AvatarImage = styled(Avatar.Image, {
  base: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit',
  },
});

export const AvatarFallBack = styled(Avatar.Fallback, {
  base: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$gray100',
    color: '$gray500',
  },
});

export const StyledUser = styled(User, {
  base: {
    width: '$7',
    height: '$7',
  },
});

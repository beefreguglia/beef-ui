import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import {
  AvatarContainer,
  AvatarFallBack,
  AvatarImage,
  StyledUser,
} from './ styles';

export interface AvatarProps extends HTMLStyledProps<typeof AvatarImage> {
  size?: '$sm' | '$md' | '$xs' | '$lg';
}

export function Avatar({ size, ...imageProps }: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...imageProps} />
      <AvatarFallBack delayMs={600}>
        <StyledUser />
      </AvatarFallBack>
    </AvatarContainer>
  );
}

Avatar.displayName = 'Avatar';

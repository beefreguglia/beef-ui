import { ReactNode } from 'react';
import {
  BoxContainer,
  BoxContentContainer,
  BoxFooterContainer,
  BoxHeaderContainer,
} from './styles';
import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';

export type BoxRootProps = HTMLStyledProps<typeof BoxContainer>;

export function BoxRoot({
  children,
  hasShadow = false,
  ...props
}: BoxRootProps) {
  return (
    <BoxContainer hasShadow={hasShadow} {...props}>
      {children}
    </BoxContainer>
  );
}

BoxRoot.displayName = 'Box';

export interface BoxHeaderProps
  extends HTMLStyledProps<typeof BoxHeaderContainer> {
  children?: ReactNode;
}

export function BoxHeader({ children, ...props }: BoxHeaderProps) {
  return (
    <BoxHeaderContainer {...props}>
      <>{children}</>
    </BoxHeaderContainer>
  );
}

BoxHeader.displayName = 'BoxHeader';

export type BoxContentProps = HTMLStyledProps<typeof BoxContentContainer>;

export function BoxContent({ children, contents, ...props }: BoxContentProps) {
  return (
    <BoxContentContainer contents={contents} {...props}>
      {children}
    </BoxContentContainer>
  );
}

BoxContent.displayName = 'BoxContent';

export interface BoxFooterProps
  extends HTMLStyledProps<typeof BoxHeaderContainer> {
  children?: ReactNode;
}
export function BoxFooter({ children, ...props }: BoxFooterProps) {
  return <BoxFooterContainer {...props}>{children}</BoxFooterContainer>;
}

BoxFooter.displayName = 'BoxFooter';

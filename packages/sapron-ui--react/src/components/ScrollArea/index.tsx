import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import {
  Scrollbar,
  ScrollbarContainer,
  ScrollbarCorner,
  ScrollbarThumb,
  ScrollbarViewport,
} from './styles';

export interface ScrollAreaProps
  extends HTMLStyledProps<typeof ScrollbarContainer> {}

export function ScrollArea({ children, ...props }: ScrollAreaProps) {
  return (
    <ScrollbarContainer {...props}>
      <ScrollbarViewport>{children}</ScrollbarViewport>
      <Scrollbar orientation="vertical">
        <ScrollbarThumb />
      </Scrollbar>
      <Scrollbar orientation="horizontal">
        <ScrollbarThumb />
      </Scrollbar>
      <ScrollbarCorner />
    </ScrollbarContainer>
  );
}

ScrollArea.displayName = 'ScrollArea';

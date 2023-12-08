import * as ScrollArea from '@radix-ui/react-scroll-area';
import { styled } from '@beefreguglia/beef-ui--react/jsx';

export const ScrollbarContainer = styled(ScrollArea.Root, {
  base: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
});

export const ScrollbarViewport = styled(ScrollArea.Viewport, {
  base: {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
  },
});

export const Scrollbar = styled(ScrollArea.Scrollbar, {
  base: {
    display: 'flex',
    userSelect: 'none',
    touchAction: 'none',
    padding: '2px',
    backgroundColor: '$gray50',
    transition: 'background 160ms ease-out',
    borderRadius: '$xs',

    '&:hover': {
      backgroundColor: '$gray100',
    },

    '&[data-orientation="vertical"]': {
      width: '6px',
    },

    '&[data-orientation="horizontal"]': {
      flexDirection: 'column',
      height: '6px',
    },
  },
});

export const ScrollbarThumb = styled(ScrollArea.Thumb, {
  base: {
    flex: 1,
    backgroundColor: '$gray200',
    borderRadius: '$md',
    position: 'relative',

    '&::before': {
      content: '',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      minWidth: '6px',
      minHeight: '6px',
    },
  },
});

export const ScrollbarCorner = styled(ScrollArea.Corner, {
  base: {
    backgroundColor: '$gray200',
  },
});

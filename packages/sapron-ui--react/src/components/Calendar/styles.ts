import { styled } from '@beefreguglia/beef-ui--react/jsx';
import { motion } from 'framer-motion';
import { Text } from '../Text';

export const CalendarContainer = styled(motion.div, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    background: '$white',
    borderRadius: '$md',

    '@media (max-width: 400px)': {
      gap: '$3',
    },
  },
});

export const CalendarHeader = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '$neutralGray50',
    borderTopRadius: '$md',
    padding: '$4',
  },
});

export const CalendarTitle = styled(Text, {
  base: {
    fontWeight: '$bold',
    textTransform: 'capitalize',
    cursor: 'pointer',
    userSelect: 'none',
    fontFamily: '$default',
    fontSize: '$md',
  },
});

export const CalendarActions = styled('div', {
  base: {
    display: 'flex',
    gap: '$2',
  },
});

export const CalendarBody = styled('table', {
  base: {
    width: '100%',
    fontFamily: '$default',
    borderSpacing: '0.25rem',
    tableLayout: 'fixed',
  },
});

export const CalendarThead = styled('thead', {
  base: {
    color: '$gray800',
    fontSize: '$xs',
    fontFamily: '$default',
    fontWeight: '$bold',
  },
});

export const CalendarTh = styled(motion.th, {
  base: {
    backgroundColor: '$neutralGray50',
    width: '100%',
    padding: '$4',

    '&:first-child': {
      borderBottomLeftRadius: '$md',
    },

    '&:last-child': {
      borderBottomRightRadius: '$md',
    },
  },
});

export const CalendarDay = styled(motion.button, {
  base: {
    width: '100%',
    aspectRatio: '1 / 1',
    textAlign: 'center',
    cursor: 'pointer',
    fontFamily: '$default',
    borderRadius: '$md',
    fontWeight: 'bold',
    color: '$gray800',
    outline: 'none',

    '&:disabled': {
      background: 'none',
      cursor: 'default',
      opacity: 0.4,
      border: 'none',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$blue100',
      transition: 'all',
      transitionDuration: '100ms',
      transitionTimingFunction: 'ease-in',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px #4766D8',
      color: '$blue300',
    },
  },

  variants: {
    isOtherMonth: {
      true: {
        background: 'none',
        opacity: 0.4,
        borderColor: ' transparent !important',
      },
    },

    isToday: {
      true: {
        background: '$gray50',

        '&:hover': {
          background: '$darkBlue50',
        },
      },
    },

    isActive: {
      true: {
        background: '$blue500',
        color: '$white',
        '&:focus': {
          color: '$white',
        },
      },
    },
  },
});

export const MonthsContainer = styled('div', {
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$3',
  },
});

export const MonthButton = styled('div', {
  base: {
    width: '100%',
    aspectRatio: '1 / 0.5',
    padding: '$2',
    textAlign: 'center',
    cursor: 'pointer',
    fontFamily: '$default',
    borderRadius: '$md',
    fontWeight: 'bold',
    color: '$gray800',
    fontSize: '$md',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:disabled': {
      background: 'none',
      cursor: 'default',
      opacity: 0.4,
      border: 'none',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$blue100',
      transition: 'all',
      transitionDuration: '100ms',
      transitionTimingFunction: 'ease-in',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px #4766D8',
      color: '$blue300',
    },
  },
});

export const ButtonsContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '$4',
    padding: '$4',
    width: '100%',
    borderRadius: '$md',
    backgroundColor: '$neutralGray50',
  },
});

export const YearsContainer = styled('div');

export const CalendarYearsHeader = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '$neutralGray50',
    padding: '$4',
    borderRadius: '$md',
  },
});

export const YearActionButton = styled('button', {
  base: {
    cursor: 'pointer',
    lineHeight: 0,
    borderRadius: '$sm',

    '&:hover': {
      transition: 'color 300ms',
      color: '$blue300',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px #4766D8',
      color: '$blue300',
    },
  },
});

export const ContentYearsContainer = styled('div', {
  base: {
    display: 'grid',
    gridTemplateColumns: '5',
    alignItems: 'center',
    gap: '$2',
  },
});
export const YearButton = styled('button', {
  base: {
    width: '100%',
    padding: '$2',
    aspectRatio: '1 / 0.5',
    textAlign: 'center',
    cursor: 'pointer',
    fontFamily: '$default',
    borderRadius: '$md',
    fontWeight: 'bold',
    color: '$gray800',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:disabled': {
      background: 'none',
      cursor: 'default',
      opacity: 0.4,
      border: 'none',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$blue100',
      transition: 'all',
      transitionDuration: '100ms',
      transitionTimingFunction: 'ease-in',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px #4766D8',
      color: '$blue300',
    },
  },
});

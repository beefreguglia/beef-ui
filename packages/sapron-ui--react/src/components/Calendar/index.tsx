/* eslint-disable no-unused-vars */
import { getWeekDays } from '../../utils/get-week-days';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { useMemo, useState } from 'react';
import { css } from '@beefreguglia/beef-ui--react/css';
import {
  ButtonsContainer,
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTh,
  CalendarThead,
  CalendarTitle,
  CalendarYearsHeader,
  ContentYearsContainer,
  MonthButton,
  MonthsContainer,
  YearActionButton,
  YearButton,
  YearsContainer,
} from './styles';

import 'dayjs/locale/pt-br';
import { Button } from '../Button';
import { capitalizeFirstLetter } from '../../utils/capitalize-first-letter';

type MonthTypes = 'Current' | 'Next' | 'Previous';

interface CalendarDays {
  date: dayjs.Dayjs;
  disabled: boolean;
  monthType: MonthTypes;
}

interface CalendarWeek {
  week: number;
  days: CalendarDays[];
}

dayjs.locale('pt-br');

type CalendarWeeks = CalendarWeek[];
type CalendarTypes = 'OnlyFuture' | 'OnlyPast' | 'AllDates';

export interface CalendarProps {
  selectedDate: Date | null;
  onDateSelected: (date: Date) => void;
  calendarType?: CalendarTypes;
  selectAllDate?: boolean;
  haveButtonToday?: boolean;
}

type CalendarSteps = 'calendar' | 'months' | 'years';

const container = {
  hidden: { opacity: 1, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemDay = {
  hidden: { y: -10, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};
export function Calendar({
  selectedDate,
  onDateSelected,
  calendarType,
  selectAllDate,
  haveButtonToday = true,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(() => {
    if (selectedDate !== null) {
      return dayjs(selectedDate).set('date', 1);
    }
    return dayjs().set('date', 1);
  });
  const [currentYearDate, setCurrentYearDate] = useState(() => {
    if (selectedDate !== null) {
      return dayjs(selectedDate).set('date', 1);
    }
    return dayjs().set('date', 1);
  });
  const [calendarStep, setCalendarStep] = useState<CalendarSteps>('calendar');
  const [auxDay, setAuxDay] = useState(0);
  const [auxMonth, setAuxMonth] = useState(0);

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month');
    setCurrentDate(previousMonthDate);
  }

  function handleNextMonth() {
    const nextMonthDate = currentDate.add(1, 'month');
    setCurrentDate(nextMonthDate);
  }

  function handlePreviousYears() {
    const previousYearDate = currentYearDate.subtract(8, 'year');
    setCurrentYearDate(previousYearDate);
  }

  function handleNextYears() {
    const nextYearDate = currentYearDate.add(8, 'year');
    setCurrentYearDate(nextYearDate);
  }

  function handleClickDay(date: Date) {
    if (selectAllDate) {
      setAuxDay(dayjs(date).date());
      setCalendarStep('months');
    } else {
      onDateSelected(date);
    }
  }

  function handleClickMonth(month: number) {
    setAuxMonth(month);
    setCalendarStep('years');
  }

  function handleClickTitle() {
    setAuxDay(currentDate.date());
    setCalendarStep('months');
  }

  function handleClickYear(year: number) {
    onDateSelected(new Date(year, auxMonth - 1, auxDay));
    setCalendarStep('calendar');
  }

  function handleToday() {
    const today = new Date();
    if (selectedDate !== today) {
      onDateSelected(new Date());
    } else {
      console.log('Já estamos no dia de hoje');
    }
  }

  const shortWeekDays = getWeekDays({ short: true });
  const currentMonth = currentDate.format('MMMM');
  const currentYear = currentDate.format('YYYY');

  const calendarMonths = Array.from({
    length: 12,
  }).map((_, index) => {
    return {
      name: dayjs().month(index).format('MMMM'),
      number: dayjs().month(index).format('MM'),
    };
  });

  const calendarWeeks = useMemo(() => {
    function getDaysInMonth() {
      return Array.from({
        length: currentDate.daysInMonth(),
      }).map((_, index) => {
        return currentDate.set('date', index + 1);
      });
    }
    const daysInMonthArray = getDaysInMonth();
    const firstWeekDay = currentDate.get('day');

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, index) => {
        return currentDate.subtract(index + 1, 'day');
      })
      .reverse();

    const lastDayInCurrentMonth = currentDate.set(
      'date',
      currentDate.daysInMonth(),
    );
    const lastWeekDay = lastDayInCurrentMonth.get('day');
    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, index) => {
      return lastDayInCurrentMonth.add(index + 1, 'day');
    });

    let calendarDays: CalendarDays[] = [];

    switch (calendarType) {
      case 'OnlyPast': {
        calendarDays = [
          ...previousMonthFillArray.map((date) => {
            return {
              date,
              disabled: true,
              monthType: 'Previous',
            } as CalendarDays;
          }),
          ...daysInMonthArray.map((date) => {
            return {
              date,
              disabled: date.endOf('day').isAfter(new Date()),
              monthType: 'Current',
            } as CalendarDays;
          }),
          ...nextMonthFillArray.map((date) => {
            return { date, disabled: true, monthType: 'Next' } as CalendarDays;
          }),
        ];
        break;
      }
      case 'AllDates': {
        calendarDays = [
          ...previousMonthFillArray.map((date) => {
            return {
              date,
              disabled: true,
              monthType: 'Previous',
            } as CalendarDays;
          }),
          ...daysInMonthArray.map((date) => {
            return {
              date,
              disabled: false,
              monthType: 'Current',
            } as CalendarDays;
          }),
          ...nextMonthFillArray.map((date) => {
            return { date, disabled: true, monthType: 'Next' } as CalendarDays;
          }),
        ];
        break;
      }
      default: {
        calendarDays = [
          ...previousMonthFillArray.map((date) => {
            return {
              date,
              disabled: true,
              monthType: 'Previous',
            } as CalendarDays;
          }),
          ...daysInMonthArray.map((date) => {
            return {
              date,
              disabled: date.endOf('day').isBefore(new Date()),
              monthType: 'Current',
            } as CalendarDays;
          }),
          ...nextMonthFillArray.map((date) => {
            return { date, disabled: true, monthType: 'Next' } as CalendarDays;
          }),
        ];
        break;
      }
    }

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, index, arrayOriginal) => {
        const isNewWeek = index % 7 === 0;
        if (isNewWeek) {
          weeks.push({
            week: index / 7 + 1,
            days: arrayOriginal.slice(index, index + 7),
          });
        }
        return weeks;
      },
      [],
    );
    return calendarWeeks;
  }, [calendarType, currentDate]);

  const calendarYears = useMemo(() => {
    const previousYearsFillArray = Array.from({ length: 8 }, (_, index) =>
      currentYearDate.subtract(index, 'year').year(),
    ).reverse();
    const nextYearsFillArray = Array.from({ length: 7 }, (_, index) =>
      currentYearDate.add(index + 1, 'year').year(),
    );
    const calendarYears = [...previousYearsFillArray, ...nextYearsFillArray];
    return calendarYears;
  }, [currentYearDate]);

  return (
    <CalendarContainer variants={container} initial="hidden" animate="visible">
      {calendarStep === 'calendar' && (
        <>
          <CalendarHeader>
            <CalendarTitle
              className={css({
                '& >span': {
                  color: '$blue500',
                },
              })}
              onClick={handleClickTitle}
            >
              {currentMonth} <span>{currentYear}</span>
            </CalendarTitle>

            <CalendarActions
              className={css({
                '& > button': {
                  cursor: 'pointer',
                  lineHeight: 0,
                  borderRadius: '$sm',
                  outline: 'none',
                  color: '$blue500',

                  '& > svg': {
                    width: '$5',
                    height: '$5',
                  },

                  '&:hover': {
                    transition: 'color 300ms',
                    color: '$blue500',
                  },

                  '&:focus': {
                    boxShadow: '0 0 0 2px #4766D8',
                  },
                },
              })}
            >
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={handlePreviousMonth}
                title="Mês anterior"
              >
                <CaretLeft weight="bold" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={handleNextMonth}
                title="Próximo mês"
              >
                <CaretRight weight="bold" />
              </motion.button>
            </CalendarActions>
          </CalendarHeader>
          <CalendarBody
            className={css({
              '& tbody:before': {
                content: '',
                lineHeight: '0.75rem',
                display: 'block',
                color: '$gray800',
              },

              '& tbody td': {
                boxSizing: 'border-box',
              },
            })}
          >
            <CalendarThead>
              <tr>
                {shortWeekDays.map((weekDay) => (
                  <CalendarTh key={weekDay}>{weekDay}</CalendarTh>
                ))}
              </tr>
            </CalendarThead>
            <tbody>
              {calendarWeeks.map(({ week, days }) => {
                return (
                  <motion.tr key={week} variants={itemDay}>
                    {days.map(({ date, disabled, monthType }) => {
                      const isToday = date.isSame(dayjs(new Date()), 'day');
                      const isActive = date.isSame(dayjs(selectedDate), 'day');
                      return (
                        <td key={date.toString()}>
                          <CalendarDay
                            whileTap={{ scale: 0.8 }}
                            disabled={monthType === 'Current' && disabled}
                            onClick={
                              monthType === 'Next' || monthType === 'Previous'
                                ? () => {
                                    if (monthType === 'Next') {
                                      handleNextMonth();
                                    }
                                    if (monthType === 'Previous') {
                                      handlePreviousMonth();
                                    }
                                  }
                                : () => handleClickDay(date.toDate())
                            }
                            isOtherMonth={
                              monthType === 'Previous' || monthType === 'Next'
                            }
                            isToday={isToday}
                            isActive={isActive}
                          >
                            {date.get('date')}
                          </CalendarDay>
                        </td>
                      );
                    })}
                  </motion.tr>
                );
              })}
            </tbody>
          </CalendarBody>
          {haveButtonToday && (
            <ButtonsContainer>
              <Button w="30%" onClick={handleToday}>
                Hoje
              </Button>
            </ButtonsContainer>
          )}
        </>
      )}
      {calendarStep === 'months' && (
        <MonthsContainer>
          {calendarMonths.map((month) => (
            <MonthButton
              onClick={() => handleClickMonth(Number(month.number))}
              key={month.number}
            >
              {capitalizeFirstLetter(month.name)}
            </MonthButton>
          ))}
        </MonthsContainer>
      )}
      {calendarStep === 'years' && (
        <YearsContainer>
          <CalendarYearsHeader
            className={css({
              '& svg': {
                width: '$5',
                height: '$5',
              },
            })}
          >
            <YearActionButton
              onClick={handlePreviousYears}
              title="Anos anteriores"
            >
              <CaretLeft />
            </YearActionButton>
            <YearActionButton onClick={handleNextYears} title="Próximos anos">
              <CaretRight />
            </YearActionButton>
          </CalendarYearsHeader>
          <ContentYearsContainer>
            {calendarYears.map((year) => (
              <YearButton
                onClick={() => handleClickYear(Number(year))}
                key={Number(year)}
              >
                {Number(year)}
              </YearButton>
            ))}
          </ContentYearsContainer>
        </YearsContainer>
      )}
    </CalendarContainer>
  );
}

import { useState } from 'react';
import { Input, DatePickerContainer, DatePickerErrorContainer } from './styles';
import { CalendarBlank, Warning } from 'phosphor-react';
import * as Popover from '@radix-ui/react-popover';
import { Calendar } from '../Calendar';
import { BoxContent, BoxRoot } from '../Box';
import type { HTMLStyledProps } from '@beefreguglia/beef-ui--react/jsx';
import { css } from '@beefreguglia/beef-ui--react/css';
import dayjs from 'dayjs';
import { Label } from '../Label';
import { Text } from '../Text';

type CalendarTypes = 'OnlyFuture' | 'OnlyPast' | 'AllDates';

export interface DatePickerProps extends HTMLStyledProps<typeof Input> {
  selectedDate: Date;
  onDateSelected: (date: Date) => void;
  calendarType?: CalendarTypes;
  selectAllDate?: boolean;
  errorMessage?: string;
  label?: string;
}
export function DatePicker({
  errorMessage,
  selectedDate,
  onDateSelected,
  calendarType = 'AllDates',
  selectAllDate = false,
  label,
  id,
  ...props
}: DatePickerProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const hasError = !!errorMessage;
  const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');

  function handleSelectDate(date: Date) {
    onDateSelected(date);
    setIsPopoverOpen(false);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      {label && <Label htmlFor={id}>{label}</Label>}
      <Popover.Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <Popover.Trigger asChild>
          <DatePickerContainer
            className={css({
              '& svg': {
                cursor: 'pointer',
                width: '14px',
                height: '14px',
                borderRadius: '$full',

                '&:hover': {
                  backgroundColor: '$gray100',
                  transition: 'background 300ms',
                },
              },
            })}
            isOpen={isPopoverOpen}
            hasError={hasError}
          >
            <Input value={formattedDate} type="date" id={id} {...props} />
            <Popover.Anchor asChild>
              <CalendarBlank weight="bold" color="#394760" />
            </Popover.Anchor>
          </DatePickerContainer>
        </Popover.Trigger>
        {hasError && (
          <DatePickerErrorContainer>
            <Warning size={14} color="#FF2732" />
            <Text size="$sm" color="$red500">
              {errorMessage}
            </Text>
          </DatePickerErrorContainer>
        )}
        <Popover.Portal>
          <Popover.Content side="left" asChild>
            <BoxRoot hasShadow>
              <BoxContent css={{ maxWidth: '400px', padding: '$1' }}>
                <Calendar
                  onDateSelected={handleSelectDate}
                  selectedDate={selectedDate}
                  calendarType={calendarType}
                  selectAllDate={selectAllDate}
                />
              </BoxContent>
            </BoxRoot>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

DatePicker.displayName = 'DatePicker';

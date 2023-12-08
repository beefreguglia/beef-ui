import { StoryObj, Meta } from '@storybook/react';
import { Calendar, CalendarProps, BoxContent, BoxRoot } from '../index.tsx';

export default {
  title: 'Data Display/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ref: {
      control: { type: null },
    },
  },
  decorators: [
    (Story) => {
      return (
        <BoxRoot hasShadow>
          <BoxContent
            css={{
              backgroundColor: '$blue50',
              padding: '$4',
            }}
          >
            {Story()}
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<CalendarProps>;

export const Primary: StoryObj<CalendarProps> = {};

export const OnlyPast: StoryObj<CalendarProps> = {
  args: {
    calendarType: 'OnlyPast',
  },
};

export const AllDates: StoryObj<CalendarProps> = {
  args: {
    calendarType: 'AllDates',
  },
};

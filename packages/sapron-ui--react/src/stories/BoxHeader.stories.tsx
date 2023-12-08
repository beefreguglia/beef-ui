import { StoryObj, Meta } from '@storybook/react';

import {
  BoxRoot,
  BoxContent,
  BoxHeader,
  BoxHeaderProps,
  Text,
  H1,
  H2,
  ScrollArea,
  Separator,
} from '../index.tsx';

export default {
  title: 'Surfaces/Box/BoxHeader',
  component: BoxHeader,
  tags: ['autodocs'],
  args: {
    children: (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <H1>Título</H1>
        <H2>Descrição</H2>
      </div>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Componente filho',
    },
    ref: {
      control: { type: null },
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente caixa com header',
      },
    },

    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <BoxRoot>
          <BoxContent
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '$blue50',
              padding: '$4',
            }}
          >
            <BoxRoot hasShadow>
              {Story()}
              <Separator css={{ marginTop: '1rem' }} />
              <BoxContent contents="header">
                <ScrollArea>
                  <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut molestiae facere voluptatem animi quasi nihil quidem
                    accusantium quod illum dicta sit voluptates illo sint,
                    inventore asperiores minima nemo cupiditate reiciendis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut molestiae facere voluptatem animi quasi nihil quidem
                    accusantium quod illum dicta sit voluptates illo sint,
                    inventore asperiores minima nemo cupiditate reiciendis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut molestiae facere voluptatem animi quasi nihil quidem
                    molestiae facere voluptatem animi quasi nihil quidem
                    accusantium quod illum dicta sit voluptates illo sint,
                    inventore asperiores minima nemo cupiditate reiciendis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut molestiae facere voluptatem animi quasi nihil quidem
                    accusantium quod illum dicta sit voluptates illo sint,
                    inventore asperiores minima nemo cupiditate reiciendis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut molestiae facere voluptatem animi quasi nihil quidem
                  </Text>
                </ScrollArea>
              </BoxContent>
            </BoxRoot>
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<BoxHeaderProps>;

export const Primary: StoryObj<BoxHeaderProps> = {};

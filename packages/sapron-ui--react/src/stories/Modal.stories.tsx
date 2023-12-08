import { StoryObj, Meta } from '@storybook/react';
import {
  BoxContent,
  BoxRoot,
  Button,
  Modal,
  ModalProps,
  ModalRoot,
  ModalTrigger,
  Text,
} from '../index.tsx';

export default {
  title: 'Overlay/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    children: (
      <BoxRoot>
        <BoxContent css={{ padding: '$4', height: '100%' }}>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            molestiae facere voluptatem animi quasi nihil quidem accusantium
            quod illum dicta sit voluptates illo sint, inventore asperiores
            minima nemo cupiditate reiciendis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Aut molestiae facere voluptatem animi
            quasi nihil quidem accusantium quod illum dicta sit voluptates illo
            sint,
          </Text>
        </BoxContent>
      </BoxRoot>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Componente filho',
    },
    variant: {
      options: ['lateral', 'center'],
      control: {
        type: 'select',
      },
      description: 'Posição do modal',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente caixa para utilizar no sistema',
      },
    },

    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <ModalRoot>
          <ModalTrigger>
            <Button>Abrir modal</Button>
          </ModalTrigger>
          {Story()}
        </ModalRoot>
      );
    },
  ],
} as Meta<ModalProps>;

export const Primary: StoryObj<ModalProps> = {};

export const LeftModal: StoryObj<ModalProps> = {
  args: {
    variant: 'lateral',
  },
};

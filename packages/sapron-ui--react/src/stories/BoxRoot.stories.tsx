import { StoryObj, Meta } from '@storybook/react';
import {
  BoxRoot,
  BoxContent,
  BoxRootProps,
  Text,
  ScrollArea,
} from '../index.tsx';

export default {
  title: 'Surfaces/Box/BoxRoot',
  component: BoxRoot,
  tags: ['autodocs'],
  args: {
    children: (
      <BoxContent>
        <ScrollArea>
          <Text css={{ width: '98%', maxHeight: '200px' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            atque, quod unde porro qui dolore et facere, earum, mollitia iste
            aspernatur error quos ad sequi inventore necessitatibus dolores
            animi ea? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Neque, aspernatur? Nostrum recusandae magni provident corporis
            laudantium? Quos facere vel voluptatum perferendis sed qui
            exercitationem tenetur fugiat, nihil itaque nulla. Minima! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Assumenda nisi
            perferendis tempore recusandae quasi voluptates repellat quae itaque
            odio accusamus dolores, et quis harum placeat alias aliquid
            deleniti! Beatae, ullam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Provident accusamus non optio eum sequi molestiae
            voluptatem dignissimos distinctio quod eveniet blanditiis unde
            laudantium amet officiis omnis at totam, pariatur ullam. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Eveniet dicta unde
            eaque accusamus cum est debitis voluptatibus consequuntur maiores
            voluptate rem et numquam, sapiente commodi quibusdam impedit, vero
            architecto labore.
          </Text>
        </ScrollArea>
      </BoxContent>
    ),
    hasShadow: false,
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
        story: 'Componente caixa',
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
              padding: '$4',
              backgroundColor: '$blue50',
            }}
          >
            {Story()}
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<BoxRootProps>;

export const Primary: StoryObj<BoxRootProps> = {};

export const hasShadow: StoryObj<BoxRootProps> = {
  args: {
    hasShadow: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente caixa com sombra',
      },
    },
  },
};

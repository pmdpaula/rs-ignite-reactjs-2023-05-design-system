import { StoryObj, Meta } from '@storybook/react';
import { Heading, HeadingProps } from '@ignite-ui/react';


export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom Title',
  }
} as Meta<HeadingProps>;

type Story = StoryObj<HeadingProps>;

export const Primary: Story = {};

export const CustomTag: Story = {
  args: {
    children: 'H1 heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading será um `h2`, mas você pode alterar o elemento HTML usando a prop `as`.',
      }
    }
  }
};

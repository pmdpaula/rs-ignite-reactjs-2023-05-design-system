import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@axesoft-ui/react';


export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: { type: 'inline-radio' }
    },
  },
} as Meta<TextProps>;

type Story = StoryObj<TextProps>;

export const Primary: Story = {};

export const CustomTag: Story = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};

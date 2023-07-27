import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@ignite-ui/react';


export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.',
  }
} as Meta<TextProps>;

type Story = StoryObj<TextProps>;

export const Primary: Story = {};

export const CustomTag: Story = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};

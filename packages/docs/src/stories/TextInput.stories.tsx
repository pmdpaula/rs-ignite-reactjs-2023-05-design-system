import { StoryObj, Meta } from '@storybook/react';
import { TextInput, TextInputProps, Box, Text } from '@ignite-ui/react';


export default {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    placeholder: 'placeholder',
  },
  decorators: [
    (Story) => {
      return (
        <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size='sm'>E-mail address</Text>
          {Story()}</Box>
      );
    }
  ],
} as Meta<TextInputProps>;

type Story = StoryObj<TextInputProps>;

export const Primary: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  }
};

export const WithPrefix: Story = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  }
};

import { StoryObj, Meta } from '@storybook/react';
import { TextArea, TextAreaProps, Box, Text } from '@ignite-ui/react';


export default {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Add any observations...',
  },
  decorators: [
    (Story) => {
      return (
        <Box as='label' css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size='sm'>Observations</Text>
          {Story()}</Box>
      );
    }
  ],
} as Meta<TextAreaProps>;

type Story = StoryObj<TextAreaProps>;

export const Primary: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  }
};


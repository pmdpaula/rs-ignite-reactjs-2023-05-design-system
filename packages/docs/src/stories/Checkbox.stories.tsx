import { StoryObj, Meta } from '@storybook/react';
import { Checkbox, CheckboxProps, Box, Text } from '@axesoft-ui/react';


export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box as='label' css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
          <Text size='sm'>Accept tems of use</Text>
        </Box>
      );
    }
  ],
} as Meta<CheckboxProps>;

type Story = StoryObj<CheckboxProps>;

export const Primary: Story = {};


import { StoryObj,
  Meta } from '@storybook/react';
import { Box, Text, Tooltip, TooltipProps } from '@ignite-ui/react';


export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as='label'
          css={{ 
            display: 'flex',
            width: 300,
            height: 300,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '$gray100',
          }}>
          {Story()}
        </Box>
      );
    }
  ],
  args: {
    children: (
      <Box
        css={{
          width: 18,
          height: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '$gray600',
        }}
      >
        <Text>22</Text>
      </Box>
    ),
  },
  argTypes: {
    children: {
      control: { type: null }
    },
    side: {
      options: ['left', 'right', 'top', 'bottom'],
      control: { type: 'inline-radio' }
    },
  }
} as Meta<TooltipProps>;

type Story = StoryObj<TooltipProps>;

export const Bottom: Story = {
  args: {
    side: 'bottom',
    content: 'Tooltip on bottom',
  },
};

export const Right: Story = {
  args: {
    side: 'right',
    content: 'Tooltip on right',
  },
};

export const Top: Story = {
  args: {
    side: 'top',
    content: 'Tooltip on top',
  },
};

export const Left: Story = {
  args: {
    side: 'left',
    content: 'Tooltip on left',
  },
};

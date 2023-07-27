import { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@ignite-ui/react';

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Send'
  }
} as Meta<ButtonProps>;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Create new'
  }
};


export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  }
};

export const Small: Story = {
  args: {
    size: 'sm',
  }
};


export const Disabled: Story = {
  args: {
    disabled: true,
  }
};

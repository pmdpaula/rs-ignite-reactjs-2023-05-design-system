import { StoryObj, Meta } from '@storybook/react';
import { Button, Toast, ToastProps } from '@ignite-ui/react';
import { useArgs } from '@storybook/client-api';


export default {
  title: 'Data Display/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    title: 'Agendamento realizado',
    description: 'Sexta-feira, 11 de agosto de 2023, às 15:00h',
    open: true,
  },
  decorators: [
    (Story) => {
      const [{ open }, updateArgs] = useArgs();

      return (
        <>
          <Button onClick={() => updateArgs({ open: !open })}>{open ? 'Close' : 'Open'} Toast</Button>

          <Story />
        </>
      );
    }
  ],
} as Meta<ToastProps>;

type Story = StoryObj<ToastProps>;

export const Default: Story = {};

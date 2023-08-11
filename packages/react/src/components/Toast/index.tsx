import { ElementRef, forwardRef } from 'react';
import { ToastContainer, ToastDescription, ToastProvider, ToastTitle, ToastViewport, ToastAction } from './styles';
import { Text } from '../Text';
import { X } from 'phosphor-react';

export interface ToastProps {
  title: string;
  description: string;
  open?: boolean;
  // closeToast?: () => void;
  direction?: 'left' | 'right' | 'down' | 'up';
  // children: ReactNode;
}

// export const Toast = ({ title, description, ...props }: ToastProps) => {
export const Toast = forwardRef<ElementRef<typeof ToastContainer>, ToastProps>
(({ title, description, open = false, direction = 'right', ...props }: ToastProps, ref) => {
  return (
    <>
      <ToastProvider swipeDirection={direction}>
        <ToastContainer {...props} open={open} data-swipe-direction={direction} ref={ref}>
          <ToastTitle>
            <Text as='strong' size='lg'>
              {title}
            </Text>
  
            <ToastAction asChild altText='Fechar'><X size={22}/></ToastAction>
          </ToastTitle>
  
  
          <ToastDescription asChild>
            <Text>{description}</Text>
          </ToastDescription>
        </ToastContainer>
  
        <ToastViewport />
      </ToastProvider>
    </>
  );
});

Toast.displayName = 'Toast';

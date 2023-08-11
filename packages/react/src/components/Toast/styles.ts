import * as Toast from '@radix-ui/react-toast';
import { keyframes, styled } from '../../styles';

const viewportPadding = '25px';

const slideIn = keyframes({
  from: {
    transform: `translateX(calc(100% + var(${viewportPadding})))`,
  },
  to: {
    transform: 'translateX(0)',
  }
});

const swipeOut = keyframes({
  from: {
    transform: `translateX(calc(100% + var(${viewportPadding})))`,
  },
  to: {
    transform: 'translateX(0)',
  }
});

export const ToastProvider = styled(Toast.Provider, {});

export const ToastContainer = styled(Toast.Root, {
  all: 'unset',
  backgroundColor: '$gray800',
  borderRadius: '$md',
  border: '2px solid $gray600',
  padding: '$3 $5',
  overflow: 'hidden',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  }
});

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '$1',
});

export const ToastDescription = styled(Toast.Description, {
  all: 'unset',
  color: '$gray200',
});

export const ToastAction = styled(Toast.Action, {});

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  color: '$gray100',

  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  }
});

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  padding: viewportPadding,
  width: '360px',
  maxWidth: '100vw',
  zIndex: 2147483647,
  outline: 'none',
});

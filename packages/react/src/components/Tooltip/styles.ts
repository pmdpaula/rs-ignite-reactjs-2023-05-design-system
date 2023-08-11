import * as Tooltip from '@radix-ui/react-tooltip';
import { keyframes, styled } from '../../styles';

export const TooltipProvider = styled(Tooltip.Provider, {});

export const TooltipContainer = styled(Tooltip.Root, {});

export const TooltipTrigger = styled(Tooltip.Trigger, {});

export const TooltipPortal = styled(Tooltip.Portal, {});

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  }
});

const slideLeftAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  }
});

const slideUpAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  }
});

const slideRightAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  }
});


export const TooltipContent = styled(Tooltip.Content, {
  all: 'unset',
  backgroundColor: '$gray900',
  padding: '$5',
  borderRadius: '$sm',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$gray100',
  boxShadow: '4 16 0 4px $colors$gray800',

  '&[data-state="delayed-open"][data-side="top"]': {
    animation: `${slideDownAndFade} 200ms ease-out`,
  },

  '&[data-state="delayed-open"][data-side="right"]': {
    animation: `${slideLeftAndFade} 200ms ease-out`,
  },

  '&[data-state="delayed-open"][data-side="botton"]': {
    animation: `${slideUpAndFade} 200ms ease-out`,
  },

  '&[data-state="delayed-open"][data-side="left"]': {
    animation: `${slideRightAndFade} 200ms ease-out`,
  },

  
});

export const TooltipArrow = styled(Tooltip.Arrow, {});

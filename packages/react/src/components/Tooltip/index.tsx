import { ReactNode } from 'react';
import { TooltipArrow, TooltipContainer, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from './styles';

export interface TooltipProps {
  content: string;
  side: 'left' | 'right' | 'bottom' | 'top'
  children: ReactNode;
}

// export const Tooltip = forwardRef<ElementRef<typeof TooltipContainer>, TooltipProps>(
export const Tooltip = ({ content, children, side = 'top', ...props }: TooltipProps) => {
  return (
    <TooltipProvider delayDuration={800} skipDelayDuration={500}>
      <TooltipContainer {...props}>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>

        <TooltipPortal>
          <TooltipContent sideOffset={-16} side={side}>
            {content}

            <TooltipArrow />
          </TooltipContent>

        </TooltipPortal>

      </TooltipContainer>
    </TooltipProvider>
  );
};

Tooltip.displayName = 'Tooltip';

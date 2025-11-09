import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '~/lib/utils';

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer size-6 shrink-0 rounded-sm transition-colors outline-none',
        'border border-neutral-05 hover:border-shade-02 data-[state=checked]:border-neutral-02',
        'bg-shade-01 data-[state=checked]:bg-shade-02',
        'focus-visible:border-shade-02 focus-visible:ring-shade-02 focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid text-current transition-none place-content-center"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_208_3555)">
            <path
              d="M6.00001 10.78L3.22001 8L2.27335 8.94L6.00001 12.6667L14 4.66667L13.06 3.72667L6.00001 10.78Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_208_3555">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };

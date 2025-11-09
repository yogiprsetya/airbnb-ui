import * as React from 'react';
import { cn } from '~/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-12 rounded-lg py-4 px-3 outline-none',
        'border border-neutral-06 focus:border-shade-02',
        'text-base text-shade-02 placeholder-neutral-07',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}

export { Input };

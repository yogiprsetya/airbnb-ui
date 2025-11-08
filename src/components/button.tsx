import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib/utils';

const buttonVariants = cva(
  cn([
    'inline-flex items-center justify-center gap-2 shrink-0 [&_svg]:shrink-0',
    'text-base font-medium',
    'whitespace-nowrap transition-all outline-none',
    'disabled:pointer-events-none [&_svg]:pointer-events-none',
  ]),
  {
    variants: {
      variant: {
        default: 'bg-gradient-02 text-shade-01',
      },
      rounded: {
        default: 'rounded-default',
        cta: 'rounded-cta',
      },
      size: {
        small: 'h-10 py-3.5 px-6',
        'full-width': 'h-10 w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'small',
      rounded: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  rounded,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, rounded, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

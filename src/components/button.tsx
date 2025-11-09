import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib/utils';

const buttonVariants = cva(
  cn([
    'inline-flex items-center justify-center gap-2 shrink-0 [&_svg]:shrink-0',
    'font-medium',
    'whitespace-nowrap transition-all outline-none',
    'disabled:pointer-events-none [&_svg]:pointer-events-none',
    'focus-visible:shadow-[0_0_0_2px_rgb(255,255,255),0_0_0_4px_rgb(34,34,34)]',
  ]),
  {
    variants: {
      variant: {
        default:
          'bg-gradient-02 text-shade-01 hover:bg-gradient-03 active:bg-gradient-01 disabled:bg-neutral-03',
        secondary: 'bg-shade-02 text-shade-01 disabled:bg-neutral-03',
        tertiary:
          'bg-transparent hover:bg-shade-02-5 border border-shade-02 text-shade-02 disabled:bg-neutral-03',
      },
      rounded: {
        default: 'rounded-default',
        cta: 'rounded-cta',
      },
      size: {
        small: 'text-sm h-10 py-3.5 px-6',
        'full-width': 'text-base h-10 w-full',
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

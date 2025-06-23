import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        {...props}
        className={cn(
          `w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition ${className}`,
        )}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;

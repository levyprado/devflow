import { cn } from '@/lib/utils'
import type { ButtonProps as BaseButtonProps } from '@base-ui-components/react/button'
import { Button as BaseButton } from '@base-ui-components/react/button'

const baseClasses =
  'inline-flex items-center justify-center border border-transparent py-3 px-4 rounded-xl font-medium transition-colors duration-100'

const variants = {
  default: 'bg-primary text-primary-foreground hover:bg-primary-lighter',
  outline: 'border-border hover:bg-foreground/4',
}

type ButtonProps = BaseButtonProps & {
  variant?: 'default' | 'outline'
  children: React.ReactNode
}

export default function Button({
  variant = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

import { cn } from '@/lib/utils'

type BadgeProps = React.ComponentProps<'span'> & {
  children: React.ReactNode
  size?: 'sm' | 'md'
  className?: string
}

export default function Badge({
  children,
  size = 'md',
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex gap-2 rounded-xl bg-foreground/4 font-medium text-muted-foreground uppercase',
        size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

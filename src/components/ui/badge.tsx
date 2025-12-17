import { cn } from '@/lib/utils'

export default function Badge({
  children,
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex gap-2 rounded-xl bg-foreground/4 px-4 py-2 text-sm font-medium text-muted-foreground uppercase',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

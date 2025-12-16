import { cn } from '@/lib/utils'

export default function Input({
  type,
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'inline-flex w-full rounded-xl border bg-input px-4 py-2 text-base shadow-xs ring-border transition-shadow outline-none focus-visible:ring-2',
        className,
      )}
      {...props}
    />
  )
}

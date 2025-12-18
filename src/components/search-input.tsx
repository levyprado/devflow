import { cn } from '@/lib/utils'
import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Input from './ui/input'

type SearchInputProps = {
  placeholder: string
  className?: string
}

export default function SearchInput({
  placeholder,
  className,
}: SearchInputProps) {
  return (
    <>
      <div className={cn('relative w-full', className)}>
        <Input
          id='search'
          type='text'
          placeholder={placeholder}
          className='peer ps-11'
        />
        <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50'>
          <HugeiconsIcon
            aria-hidden={true}
            icon={Search01Icon}
            size={24}
            strokeWidth={2}
          />
        </div>
      </div>
    </>
  )
}

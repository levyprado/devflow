import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Input from './ui/input'

export default function SearchInput() {
  return (
    <>
      <div className='relative mx-auto w-full max-w-[600px]'>
        <Input
          id='search'
          type='text'
          placeholder='Search anything globally'
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

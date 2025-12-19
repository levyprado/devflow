'use client'

import { cn } from '@/lib/utils'
import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState, type ChangeEvent } from 'react'
import Input from './ui/input'

type SearchInputProps = {
  queryKey: string
  placeholder: string
  className?: string
}

export default function SearchInput({
  queryKey,
  placeholder,
  className,
}: SearchInputProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const paramValue = searchParams.get(queryKey) || ''
  const [value, setValue] = useState(paramValue)

  const updateURL = (newValue: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (newValue) {
      params.set(queryKey, newValue)
    } else {
      params.delete(queryKey)
    }

    const queryString = params.toString()
    const newURL = queryString ? `${pathname}?${queryString}` : pathname

    router.replace(newURL, { scroll: false })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    updateURL(newValue)
  }

  return (
    <>
      <div className={cn('relative w-full', className)}>
        <Input
          id='search'
          type='text'
          placeholder={placeholder}
          className='peer ps-11'
          value={value}
          onChange={handleChange}
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

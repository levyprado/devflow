'use client'

import { navbarLinks } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <div className='flex w-full flex-col gap-6'>
      {navbarLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'flex items-center gap-4 rounded-xl p-4 text-lg font-medium',
            pathname === item.href ? 'bg-primary' : 'bg-transparent',
          )}
        >
          <HugeiconsIcon icon={item.icon} size={24} strokeWidth={2} />
          {item.label}
        </Link>
      ))}
    </div>
  )
}

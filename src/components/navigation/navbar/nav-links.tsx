'use client'

import { navbarLinks } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Dialog } from '@base-ui-components/react'
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks({
  isMobileNav = false,
}: {
  isMobileNav?: boolean
}) {
  const pathname = usePathname()

  return (
    <div className='flex w-full flex-col gap-6'>
      {navbarLinks.map((item) => {
        const linkContent = (
          <>
            <HugeiconsIcon icon={item.icon} size={24} strokeWidth={2} />
            {item.label}
          </>
        )

        if (isMobileNav) {
          return (
            <Dialog.Close
              key={item.href}
              nativeButton={false}
              render={
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-4 rounded-xl p-4 text-lg font-medium',
                    pathname === item.href ? 'bg-primary' : 'bg-transparent',
                  )}
                >
                  {linkContent}
                </Link>
              }
            />
          )
        } else {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-4 rounded-xl p-4 text-lg font-medium',
                pathname === item.href ? 'bg-primary' : 'bg-transparent',
              )}
            >
              {linkContent}
            </Link>
          )
        }
      })}
    </div>
  )
}

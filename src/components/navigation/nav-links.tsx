'use client'

import { navbarLinks } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { Dialog } from '@base-ui-components/react'
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavItem({
  item,
  isMobileNav,
  pathname,
}: {
  item: (typeof navbarLinks)[0]
  isMobileNav: boolean
  pathname: string
}) {
  const isActive = pathname === item.href
  const linkContent = (
    <>
      <HugeiconsIcon icon={item.icon} size={24} strokeWidth={2} />
      <span className='sm:hidden lg:inline-block'>{item.label}</span>
    </>
  )
  const className = cn(
    'flex items-center gap-4 rounded-xl p-4 font-medium transition-colors duration-100 lg:text-lg',
    isActive
      ? 'bg-primary text-primary-foreground'
      : 'bg-transparent hover:bg-muted',
  )
  const link = (
    <Link href={item.href} className={className}>
      {linkContent}
    </Link>
  )

  if (isMobileNav) {
    return <Dialog.Close key={item.href} nativeButton={false} render={link} />
  } else {
    return link
  }
}

export default function NavLinks({
  isMobileNav = false,
}: {
  isMobileNav?: boolean
}) {
  const pathname = usePathname()

  return (
    <div className='flex w-full flex-col gap-6'>
      {navbarLinks.map((item) => (
        <NavItem
          key={item.href}
          item={item}
          isMobileNav={isMobileNav}
          pathname={pathname}
        />
      ))}
    </div>
  )
}

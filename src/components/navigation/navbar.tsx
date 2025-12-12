import { Login01Icon, UserAdd01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'
import Button from '../ui/button'
import NavLinks from './nav-links'

export default function Navbar() {
  return (
    <nav className='hidden sm:sticky sm:top-(--mobile-header-height) sm:left-0 sm:flex sm:h-[calc(100dvh-var(--mobile-header-height))] sm:flex-col sm:gap-6 sm:bg-card sm:px-5 sm:py-10 lg:top-(--desktop-header-height) lg:h-[calc(100dvh-var(--desktop-header-height))] lg:w-full lg:max-w-2xs lg:px-6'>
      <div className='flex-1 overflow-y-auto overscroll-contain'>
        <NavLinks />
      </div>

      <div className='flex flex-col gap-3'>
        <Button
          render={<Link href='/' />}
          nativeButton={false}
          variant='outline'
          className='p-4 lg:py-3'
        >
          <HugeiconsIcon
            icon={Login01Icon}
            size={24}
            strokeWidth={2}
            className='lg:hidden'
          />
          <span className='hidden lg:inline-block'>Log in</span>
        </Button>
        <Button
          render={<Link href='/' />}
          nativeButton={false}
          variant='outline'
          className='p-4 lg:py-3'
        >
          <HugeiconsIcon
            icon={UserAdd01Icon}
            size={24}
            strokeWidth={2}
            className='lg:hidden'
          />
          <span className='hidden lg:inline-block'>Sign up</span>
        </Button>
      </div>
    </nav>
  )
}

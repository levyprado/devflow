'use client'

import { cn } from '@/lib/utils'
import { Dialog } from '@base-ui-components/react/dialog'
import { Cancel01Icon, Menu01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../ui/button'
import NavLinks from './nav-links'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className='relative flex size-6 items-center justify-center sm:hidden'>
        <HugeiconsIcon
          icon={Menu01Icon}
          size={24}
          strokeWidth={2}
          className={cn(
            'absolute top-1/2 left-1/2 -translate-1/2 transition-all duration-300 ease-out',
            open ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
          )}
        />
        <HugeiconsIcon
          icon={Cancel01Icon}
          size={24}
          strokeWidth={2}
          className={cn(
            'absolute top-1/2 left-1/2 -translate-1/2 transition-all duration-300 ease-out',
            open ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
          )}
        />
        <span className='absolute top-1/2 left-1/2 size-12 -translate-1/2 pointer-fine:hidden' />
      </Dialog.Trigger>
      <Dialog.Portal className='sm:hidden'>
        <Dialog.Backdrop className='fixed inset-0 bg-black opacity-20 transition-opacity duration-300 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute dark:opacity-70' />
        <Dialog.Viewport>
          <Dialog.Popup
            render={<nav />}
            className='fixed top-(--mobile-header-height) left-0 flex h-[calc(100dvh-var(--mobile-header-height))] w-[80%] max-w-2xs flex-col gap-6 bg-card px-5 py-10 transition-all duration-300 ease-out data-ending-style:-translate-x-full data-starting-style:-translate-x-full'
          >
            <div className='flex-1 overflow-y-auto overscroll-contain'>
              <NavLinks isMobileNav={true} />
            </div>

            <div className='flex flex-col gap-3'>
              <Button
                render={<Link href='/login' />}
                nativeButton={false}
                variant='outline'
              >
                Log in
              </Button>
              <Button
                render={<Link href='/signup' />}
                nativeButton={false}
                variant='outline'
              >
                Sign up
              </Button>
            </div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

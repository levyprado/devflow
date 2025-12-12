import Link from 'next/link'
import Button from '../ui/button'
import NavLinks from './nav-links'

export default function Navbar() {
  return (
    <div className='hidden sm:sticky sm:left-0 sm:flex sm:min-h-[calc(100dvh-var(--mobile-header-height))] sm:flex-col sm:bg-card sm:px-5 sm:pt-12 sm:pb-10 lg:w-full lg:max-w-2xs lg:px-6 lg:sm:min-h-[calc(100dvh-var(--desktop-header-height))]'>
      <div className='flex flex-1 flex-col justify-between'>
        <NavLinks />

        <div className='flex flex-col gap-3'>
          <Button render={<Link href='/' />} variant='outline'>
            Log in
          </Button>
          <Button render={<Link href='/' />} variant='outline'>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  )
}

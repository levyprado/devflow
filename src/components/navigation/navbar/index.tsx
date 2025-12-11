import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './mobile-nav'

export default function Navbar() {
  return (
    <header className='sticky top-0 left-0 z-10 flex h-(--header-height) w-full items-center justify-between bg-card px-5'>
      <Link
        href='/'
        className='inline-flex items-center gap-1 font-logo text-lg font-bold'
      >
        <Image
          src='/images/site-logo.svg'
          alt='DevFlow logo'
          width={20}
          height={20}
        />
        <span>
          Dev<span className='text-primary'>Flow</span>
        </span>
      </Link>

      <div className='flex items-center'>
        {/* Theme Toggle */}

        {/* Profile */}

        <MobileNav />
      </div>
    </header>
  )
}

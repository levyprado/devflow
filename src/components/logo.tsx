import { ROUTES } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href={ROUTES.HOME}
      className='inline-flex items-center gap-1 font-logo text-lg font-bold sm:gap-2 sm:text-2xl lg:gap-3 lg:text-3xl'
    >
      <Image
        src='/images/site-logo.svg'
        alt='DevFlow logo'
        width={24}
        height={24}
        className='size-5 sm:size-6 lg:size-7'
      />
      <span>
        Dev<span className='text-primary'>Flow</span>
      </span>
    </Link>
  )
}

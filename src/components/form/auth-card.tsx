import { ROUTES } from '@/lib/constants'
import { Github01Icon, GoogleIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'

type AuthCardProps = {
  type: 'sign-in' | 'sign-up'
  title: string
  children: React.ReactNode
}

export default function AuthCard({ type, title, children }: AuthCardProps) {
  return (
    <div className='flex w-full max-w-md flex-col gap-6 rounded-xl border bg-card p-8 shadow-[0_8px_48px] shadow-foreground/6'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <h2 className='text-muted-foreground'>
          to continue to{' '}
          <span className='font-bold'>
            <span className='text-foreground'>Dev</span>
            <span className='text-primary'>Flow</span>
          </span>
        </h2>
      </div>
      <div className='flex flex-col gap-2'>
        <button className='flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-2 font-medium transition-colors duration-100 hover:bg-black/4 dark:hover:bg-white/4'>
          <HugeiconsIcon icon={Github01Icon} size={20} strokeWidth={2} />
          Continue with GitHub
        </button>
        <button className='flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-2 font-medium transition-colors duration-100 hover:bg-black/4 dark:hover:bg-white/4'>
          <HugeiconsIcon icon={GoogleIcon} size={20} strokeWidth={2} />
          Continue with Google
        </button>
      </div>
      <div className='flex items-center gap-3'>
        <div className='h-px flex-1 bg-border' />
        <p className='font-medium text-muted-foreground'>or</p>
        <div className='h-px flex-1 bg-border' />
      </div>
      {children}

      <div className='text-sm'>
        <span className='text-muted-foreground'>
          {type === 'sign-up' ? 'Have an account?' : 'No account?'}
        </span>{' '}
        <Link
          href={type === 'sign-up' ? ROUTES.SIGN_IN : ROUTES.SIGN_UP}
          className='font-medium text-primary hover:underline'
        >
          {type === 'sign-up' ? 'Sign in' : 'Sign up'}
        </Link>
      </div>
    </div>
  )
}

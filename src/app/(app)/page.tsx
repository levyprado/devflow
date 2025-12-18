import SearchInput from '@/components/search-input'
import Button from '@/components/ui/button'
import { ROUTES } from '@/lib/constants'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <section className='flex flex-col gap-6'>
        <div className='flex flex-col-reverse justify-between gap-4 sm:flex-row sm:items-end'>
          <h1 className='text-2xl font-semibold sm:text-3xl xl:text-4xl'>
            All Questions
          </h1>
          <Button
            render={<Link href={ROUTES.ASK_QUESTION} />}
            nativeButton={false}
          >
            Ask a question
          </Button>
        </div>

        <div>
          <SearchInput placeholder='Search for questions...' />
        </div>
      </section>
    </>
  )
}

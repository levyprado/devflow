import { ROUTES } from '@/lib/constants'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'
import Badge from '../ui/badge'

const topQuestions = [
  {
    _id: '1',
    title: 'How to use a custom hook in React?',
  },
  {
    _id: '2',
    title:
      'Would it be appropriate to point out an error in another paper during a referee report?',
  },
  {
    _id: '3',
    title: 'How to use a custom hook in React?',
  },
  {
    _id: '4',
    title: 'What is an example of 3 numbers that do not make up a vector?',
  },
  {
    _id: '5',
    title: 'Low digit addition generator',
  },
]

const popularTags = [
  {
    _id: '1',
    name: 'TypeScript',
    questions: 200,
  },
  {
    _id: '2',
    name: 'React',
    questions: 150,
  },
  {
    _id: '3',
    name: 'JavaScript',
    questions: 100,
  },
  {
    _id: '4',
    name: 'nextjs',
    questions: 50,
  },
  {
    _id: '5',
    name: 'tailwind css',
    questions: 75,
  },
]

export default function RightSidebar() {
  return (
    <section className='hidden xl:sticky xl:top-0 xl:right-0 xl:flex xl:h-[calc(100vh-var(--desktop-header-height))] xl:w-full xl:max-w-xs xl:flex-col xl:gap-12 xl:overflow-y-auto xl:bg-card xl:p-6 xl:py-10 xl:shadow-sm'>
      <div className='flex flex-col gap-6'>
        <h3 className='text-xl font-semibold'>Top Questions</h3>
        <div className='flex flex-col gap-4'>
          {topQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.QUESTION(_id)}
              className='group flex items-center justify-between gap-6'
            >
              <span className='line-clamp-3'>{title}</span>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={20}
                strokeWidth={2}
                className='shrink-0 transition-transform group-hover:-rotate-45'
              />
            </Link>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-6'>
        <h3 className='text-xl font-semibold'>Popular Tags</h3>
        <div className='flex flex-col gap-4'>
          {popularTags.map(({ _id, name, questions }) => (
            <Link
              key={_id}
              href={ROUTES.TAGS(_id)}
              className='group flex items-center justify-between'
            >
              <Badge>{name}</Badge>
              <div className='flex items-center gap-2'>
                <p className='text-sm font-medium'>{questions}</p>
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  size={20}
                  strokeWidth={2}
                  className='transition-transform group-hover:-rotate-45'
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

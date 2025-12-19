import SearchInput from '@/components/search-input'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import { ROUTES } from '@/lib/constants'
import Link from 'next/link'

const questions = [
  {
    _id: '1',
    title:
      'The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this',
    description: 'I want to learn react, can someone help me?',
    tags: [
      { _id: '1', name: 'React' },
      { _id: '2', name: 'JavaScript' },
    ],
    author: { _id: '1', name: 'John Doe' },
  },
  {
    _id: '2',
    title: 'How to learn JS?',
    description: 'I want to learn Javascript, can someone help me?',
    tags: [{ _id: '2', name: 'JavaScript' }],
    author: { _id: '1', name: 'John Doe' },
  },
]

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}) {
  const questionQuery = (await searchParams).q || ''

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(questionQuery?.toLowerCase()),
  )

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
          <SearchInput queryKey='q' placeholder='Search for questions...' />
          {/* Filter */}
        </div>

        <div className='flex flex-col gap-6'>
          {filteredQuestions.map((question) => (
            <article
              key={question._id}
              className='w-full rounded-xl bg-card p-6 shadow-sm'
            >
              <div className='flex flex-col gap-3'>
                <h4 className='line-clamp-3 font-medium sm:text-lg lg:text-xl'>
                  {question.title}
                </h4>
                <ul className='flex flex-wrap gap-2'>
                  {question.tags.map((tag) => (
                    <li key={tag._id}>
                      <Badge size='sm'>{tag.name}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

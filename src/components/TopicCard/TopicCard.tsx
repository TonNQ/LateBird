import { Link } from 'react-router-dom'
import path from '../../constants/path'

interface Props {
  topicId: string
  subject: string
  viewers: number
  numOfLessons: number
}

export default function TopicCard({ topicId, subject, numOfLessons, viewers }: Props) {
  return (
    <Link to={`${path.topics}/${topicId}`} className='rounded-2xl bg-white p-3 text-title shadow-lg'>
      <div className='w-full'>
        <img
          src='https://images.unsplash.com/photo-1713101888005-49e61c91891b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='ảnh từ vựng'
          className='h-[120px] w-full rounded-2xl object-cover'
        />
      </div>
      <div className='mb-4 mt-2 max-w-full text-center text-xl font-semibold'>{subject}</div>
      <div className='flex items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='black'
          className='h-6 w-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
          />
        </svg>
        <span className='ml-1 max-w-full text-paragraph'>
          <span className='font-semibold'>{numOfLessons}</span> từ
        </span>
      </div>
      <div className='mt-2 flex items-center justify-between'>
        <div className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
            />
          </svg>
          <span className='ml-1 text-paragraph'>{viewers}</span>
        </div>
      </div>
    </Link>
  )
}

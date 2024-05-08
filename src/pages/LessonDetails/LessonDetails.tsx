import { useParams } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import 'react-slideshow-image/dist/styles.css'
import CustomCarousel from '../../components/Carousel'
import Video from '../../components/Video'
import ProgressBar from '../../components/ProgressBar'

const images = [
  {
    imgURL: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    imgAlt: 'img-1'
  },
  {
    imgURL: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    imgAlt: 'img-2'
  },
  {
    imgURL: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    imgAlt: 'img-3'
  },
  {
    imgURL:
      'https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    imgAlt: 'img-4'
  }
]

export default function LessonDetails() {
  const { lessonId } = useParams()
  console.log(lessonId)
  return (
    <>
      <div className='flex items-center justify-between'>
        <Breadcrumb
          className='text-lg font-bold'
          separator='>'
          items={[
            {
              title: 'Trường học',
              href: ''
            },
            {
              title: 'Cái bảng'
            }
          ]}
        />
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
          <span className='ml-1 text-sm text-paragraph'>{100}</span>
        </div>
      </div>
      <CustomCarousel customClassName='rounded-2xl mt-4'>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />
        })}
      </CustomCarousel>
      <div className='my-4 w-full text-center text-3xl font-bold text-primary'>Cái bảng</div>
      <div className='mt-8'>
        <div className='mb-2 flex items-center text-xl font-medium'>
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
              d='M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002'
            />
          </svg>
          <span className='ml-2'>Ngôn ngữ ký hiệu</span>
        </div>
        <Video />
      </div>
      <div className='mt-8'>
        <div className='mb-2 flex items-center text-xl font-medium'>
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
              d='M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z'
            />
          </svg>
          <span className='ml-2'>Hướng dẫn phát âm</span>
        </div>
        <Video />
      </div>
      <div className='mt-8'>
        <div className='mb-2 flex items-center text-xl font-medium'>
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
              d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
            />
          </svg>
          <span className='ml-2'>Bạn đã luyện tập 3 lần</span>
        </div>
        <div className='mt-4'>
          <div className='flex-1'>Độ chính xác: </div>
          <ProgressBar percent={75} color={'blue'} />
        </div>
      </div>

      <button className='mt-8 w-full bg-gradient-to-br from-mainBlue to-mainPurple py-3 text-xl font-semibold text-white'>
        Luyện tập
      </button>
    </>
  )
}

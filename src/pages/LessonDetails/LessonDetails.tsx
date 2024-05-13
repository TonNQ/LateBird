import { useParams } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import 'react-slideshow-image/dist/styles.css'
import CustomCarousel from '../../components/Carousel'
import Recorder from '../Recorder'
import { useEffect, useState } from 'react'
import lessonsApi from '../../apis/lessons.api'
import { Lesson } from '../../types/lessons.type'
import { toast } from 'react-toastify'
import ReactPlayer from 'react-player'

export default function LessonDetails() {
  const [isRecorderVisible, setIsRecorderVisible] = useState<boolean>(false)
  const [lessonDetail, setLessonDetail] = useState<Lesson | null>(null)
  const { lessonId } = useParams()

  const showRecorder = () => {
    setIsRecorderVisible(true)
  }

  const hideRecorder = () => {
    setIsRecorderVisible(false)
  }

  useEffect(() => {
    lessonsApi
      .getLessonById(lessonId ?? '')
      .then((response) => {
        setLessonDetail(response.data as Lesson)
        console.log('lesson detail', response.data)
      })
      .catch(() => {
        toast.error('Đã có lỗi xảy ra', {
          autoClose: 3000,
          className: 'absolute top-2 right-1'
        })
      })
  }, [])

  return (
    <>
      {isRecorderVisible && (
        <div className='fixed left-0 top-0 z-30 flex h-full w-full items-center justify-center bg-zinc-300/95'>
          <Recorder hideRecorder={hideRecorder} lesson={lessonDetail as Lesson} />
        </div>
      )}
      <div className='flex items-center justify-between'>
        <Breadcrumb
          className='text-lg font-bold'
          separator='>'
          items={[
            {
              title: `${lessonDetail?.topicName}`
            },
            {
              title: `${lessonDetail?.word}`
            }
          ]}
        />
      </div>
      {lessonDetail?.photos && (
        <CustomCarousel customClassName='rounded-2xl mt-4'>
          {lessonDetail.photos.map((image) => {
            return <img key={image.photoId} src={image.linkPhoto} alt={image.photoId} />
          })}
        </CustomCarousel>
      )}
      <div className='my-4 w-full text-center text-3xl font-bold text-primary'>{lessonDetail?.word}</div>
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
        <div className='w-full'>
          <ReactPlayer url={lessonDetail?.linkVideo1} controls width={`100%`} height={`100%`} />
        </div>
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
        <div className='w-full'>
          <ReactPlayer url={lessonDetail?.linkVideo2} controls width={`100%`} height={`100%`} />
        </div>
      </div>
      {/* <div className='mt-8'>
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
          <div className='flex-1'>Độ chính xác cao nhất: </div>
          <ProgressBar percent={75} color={'blue'} />
        </div>
      </div> */}

      <button
        className='my-8 w-full bg-gradient-to-br from-mainBlue to-mainPurple py-3 text-xl font-semibold text-white'
        onClick={showRecorder}
      >
        Luyện tập
      </button>
    </>
  )
}

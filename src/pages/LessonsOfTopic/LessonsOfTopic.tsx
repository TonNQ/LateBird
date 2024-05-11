import VocabCard from '../../components/VocabCard'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import lessonsApi from '../../apis/lessons.api'
import { LessonDetail, type LessonsOfTopic } from '../../types/lessons.type'
import { debounce } from 'lodash'

export default function LessonsOfTopic() {
  const { topicId } = useParams()
  const [lessons, setLessons] = useState<LessonsOfTopic | null>(null)
  const [viewedLessons, setViewedLessons] = useState<LessonDetail[]>([])
  const [inputSearch, setInputSearch] = useState<string>('')

  const debouncedSearch = debounce((textSearch: string) => {
    if (textSearch.trim() !== '') {
      setViewedLessons(
        lessons?.lessons.filter((lesson) =>
          lesson.word.toLowerCase().includes(textSearch.trim().toLowerCase())
        ) || []
      )
    } else {
      // setViewedLessons(lessons?.lessons || [])
      lessonsApi.getLessonsByTopicId(topicId || '').then((response) => {
        setViewedLessons(response.data.lessons)
        setLessons(response.data)
      })
    }
  }, 500)

  useEffect(() => {
    lessonsApi.getLessonsByTopicId(topicId || '').then((response) => {
      setViewedLessons(response.data.lessons)
      setLessons(response.data)
    })
  }, [])

  useEffect(() => {
    debouncedSearch(inputSearch)
    return () => debouncedSearch.cancel()
  }, [inputSearch])

  return (
    <div>
      <div className='mb-4 text-2xl font-semibold text-title'>
        Khám phá chủ đề: <span className='text-primary'>{lessons?.nameTopic}</span>
      </div>
      <div className='flex w-full items-center rounded-lg bg-white px-4 py-3'>
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
            d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
          />
        </svg>
        <input
          type='search'
          placeholder='Tìm kiếm'
          className='ml-4 h-full flex-grow outline-none'
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </div>
      {/* Kết quả tìm được */}
      <div className='mb-4 mt-6 text-2xl font-semibold text-title'>Từ vựng trong chủ đề</div>
      <div className='grid grid-cols-2 gap-3'>
        {viewedLessons.map((lesson) => (
          <VocabCard
            key={lesson.lessonId}
            lessonId={lesson.lessonId}
            word={lesson.word}
            subject={lessons?.nameTopic as string}
          />
        ))}
      </div>
    </div>
  )
}

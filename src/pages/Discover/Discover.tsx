import { Select } from 'antd'
import VocabCard from '../../components/VocabCard'
import { useEffect, useState } from 'react'
import { LessonDetail } from '../../types/lessons.type'
import lessonsApi from '../../apis/lessons.api'
import { Score } from '../../types/results.type'
import { Topic } from '../../types/topics.type'
import topicsApi from '../../apis/topics.api'
import { debounce } from 'lodash'
import TopicCard from '../../components/TopicCard'

export default function Discover() {
  const [lessons, setLessons] = useState<LessonDetail[]>([])
  const [topics, setTopics] = useState<Topic[]>([])
  const [viewedLessons, setViewedLessons] = useState<LessonDetail[]>([])
  const [viewedTopics, setViewedTopics] = useState<Topic[]>([])
  const [inputSearch, setInputSearch] = useState<string>('')
  const [searchBy, setSearchBy] = useState<string>('topic')
  const [sortBy, setSortBy] = useState<string>('order')

  const debouncedSearch = debounce((textSearch: string, searchBy: string, sortBy: string) => {
    if (textSearch.trim() !== '') {
      if (searchBy === 'topic') {
        const topicsList = topics.filter((topic) =>
          topic.topicName.toLowerCase().includes(textSearch.trim().toLowerCase())
        )
        if (sortBy === 'order') {
          setViewedTopics(topicsList)
        } else {
          setViewedTopics(topicsList.sort((a, b) => b.numberOfLearnedUsers - a.numberOfLearnedUsers))
        }
      } else {
        const lessonsList = lessons.filter((lesson) =>
          lesson.word.toLowerCase().includes(textSearch.trim().toLowerCase())
        )
        if (sortBy === 'order') {
          setViewedLessons(lessonsList)
        } else {
          setViewedLessons(lessonsList.sort((a, b) => (b.LearnedPeople as number) - (a.LearnedPeople as number)))
        }
      }
    }
    // Default
    else {
      if (searchBy === 'topic') {
        topicsApi.getAllTopics().then((response) => {
          setViewedTopics(
            sortBy === 'order'
              ? response.data
              : response.data.sort((a, b) => b.numberOfLearnedUsers - a.numberOfLearnedUsers)
          )
        })
      } else {
        lessonsApi.getAllLessons().then((response) => {
          setViewedLessons(
            sortBy === 'order'
              ? response.data
              : response.data.sort((a, b) => (b.LearnedPeople as number) - (a.LearnedPeople as number))
          )
        })
      }
    }
  }, 500)

  useEffect(() => {
    debouncedSearch(inputSearch, searchBy, sortBy)
    return () => debouncedSearch.cancel()
  }, [inputSearch, searchBy, sortBy])

  useEffect(() => {
    lessonsApi
      .getAllLessons()
      .then((response) => {
        setLessons(response.data)
        setViewedLessons(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    topicsApi
      .getAllTopics()
      .then((response) => {
        setTopics(response.data)
        setViewedTopics(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <div className='mb-4 text-2xl font-semibold text-title'>Khám phá từ vựng mới</div>
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
      <div className='mt-4 flex w-full items-center justify-between'>
        <div className='flex w-[45%] flex-col justify-center'>
          <div className='mb-1'>Tìm kiếm theo: </div>
          <Select
            className='w-full'
            size='large'
            defaultValue='topic'
            onChange={(value) => {
              setSearchBy(value)
            }}
          >
            <Select.Option value='topic'>Chủ đề</Select.Option>
            <Select.Option value='lesson'>Từ vựng</Select.Option>
          </Select>
        </div>
        <div className='flex w-[45%] flex-col justify-center'>
          <div className='mb-1'>Sắp xếp theo: </div>
          <Select
            className='w-full'
            size='large'
            defaultValue='order'
            onChange={(value) => {
              setSortBy(value)
            }}
          >
            <Select.Option value='order'>Thứ tự</Select.Option>
            <Select.Option value='popular'>Phổ biến nhất</Select.Option>
          </Select>
        </div>
      </div>
      {/* Kết quả tìm được */}
      <div className='mb-4 mt-6 text-2xl font-semibold text-title'>Kết quả tìm được</div>
      <div className='grid grid-cols-2 gap-3'>
        {/* <VocabCard word='Trường học' subject='Địa điểm' viewers={121} percentage={27} />
        <VocabCard word='Chùa' subject='Địa điểm' viewers={87} percentage={80} />
        <VocabCard word='Bảng' subject='Trường học' viewers={100} percentage={65} />
        <VocabCard word='Trường học' subject='Địa điểm' viewers={121} />
        <VocabCard word='Chùa' subject='Địa điểm' viewers={87} />
        <VocabCard word='Bảng' subject='Trường học' viewers={100} /> */}
        {searchBy === 'lesson' &&
          viewedLessons.map((lesson) => (
            <VocabCard
              key={lesson.lessonId}
              lessonId={lesson.lessonId}
              word={lesson.word}
              subject={lesson.topicName as string}
              viewers={lesson.LearnedPeople}
              percentage={(lesson?.maxScore as Score).accuracyScore ?? null}
            />
          ))}
        {searchBy === 'topic' &&
          viewedTopics.map((topic) => (
            <TopicCard
              key={topic.topicId}
              topicId={topic.topicId}
              numOfLessons={topic.numberOfLessons}
              subject={topic.topicName}
              viewers={topic.numberOfLearnedUsers}
            />
          ))}
      </div>
    </div>
  )
}

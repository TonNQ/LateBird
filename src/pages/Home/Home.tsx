import { useEffect, useState } from 'react'
import StatCard from '../../components/StatCard'
import VocabCard from '../../components/VocabCard'
import { Score, UserResults } from '../../types/results.type'
import resultsApi from '../../apis/results.api'
import { toast } from 'react-toastify'
import lessonsApi from '../../apis/lessons.api'
import { LessonDetail } from '../../types/lessons.type'

export default function Home() {
  const [statistics, setStatistics] = useState<UserResults | null>(null)
  const [reviewedLessons, setReviewedLessons] = useState<LessonDetail[]>([])
  console.log('reviewLessons', reviewedLessons)
  useEffect(() => {
    resultsApi
      .getStatisticOfUser()
      .then((response) => {
        console.log(response.data)
        setStatistics(response.data)
      })
      .catch((error) => {
        toast.error(error.error, {
          autoClose: 3000,
          className: 'absolute top-2 right-0'
        })
      })
    lessonsApi.getAllLessons().then((response) => {
      const lessonsList: LessonDetail[] = response.data
      setReviewedLessons(
        lessonsList.filter(
          (lesson) => (lesson.studiedTimes as number) > 0 && (lesson.maxScore as Score).accuracyScore < 50
        )
      )
    })
  }, [])
  return (
    <div>
      {/* Thống kê */}
      <div className='grid grid-cols-1 gap-3'>
        <StatCard
          icon='src/assets/success.svg'
          primaryColor='#17E783'
          secondaryColor='#20AF62'
          quantity={statistics?.passedLessons ?? 0}
          title='Từ phát âm đạt'
          description='Độ chính xác cao nhất: '
          percent={parseFloat(((statistics?.maxAccuracyofPass || 0) as number).toFixed(1)) ?? 0}
        />
        <StatCard
          icon='src/assets/fail.svg'
          primaryColor='#FF3737'
          secondaryColor='#FFA674'
          quantity={statistics?.failedLessons ?? 0}
          title='Từ phát âm chưa đạt'
          description='Độ chính xác cao nhất: '
          percent={parseFloat(((statistics?.maxAccuracyofFail || 0) as number).toFixed(1)) ?? 0}
        />
        <StatCard
          icon='src/assets/book.svg'
          primaryColor='#4C6FFF'
          secondaryColor='#BB65FF'
          quantity={statistics?.completedTopics ?? 0}
          title='Chủ đề đã học'
          description='Hoàn thành: '
          percent={parseFloat(((statistics?.process || 0) as number).toFixed(1)) ?? 0}
        />
      </div>
      {/* Các từ cần ôn tập */}
      <div className='mb-4 mt-8 text-2xl font-semibold text-title'>
        Các từ cần ôn tập (<span>{reviewedLessons.length}</span>)
      </div>
      <div className='grid grid-cols-2 gap-3'>
        {/* <VocabCard word='Trường học' subject='Địa điểm' viewers={121} percentage={27} />
        <VocabCard word='Chùa' subject='Địa điểm' viewers={87} percentage={80} /> */}

        {reviewedLessons.map((lesson) => (
          <VocabCard
            key={lesson.lessonId}
            lessonId={lesson.lessonId}
            word={lesson.word}
            subject={lesson.topicName as string}
            viewers={lesson.LearnedPeople}
            percentage={parseFloat((((lesson.maxScore as Score).accuracyScore || 0) as number).toFixed(1)) ?? 0}
          />
        ))}
      </div>
      {/* Đề xuất */}
      {/* <div className='mb-4 mt-8 text-2xl font-semibold text-title'>Đề xuất</div>
      <div className='grid grid-cols-2 gap-3'>
        <VocabCard word='Trường học' subject='Địa điểm' viewers={121} />
        <VocabCard word='Chùa' subject='Địa điểm' viewers={87} />
        <VocabCard word='Bảng' subject='Trường học' viewers={100} />
      </div> */}
    </div>
  )
}

import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contexts/app.context'
import CircularProgressBar from '../../components/CircularProgressBar'
import WordScore from '../../components/WordScore'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import path from '../../constants/path'
import resultsApi from '../../apis/results.api'
import { Score } from '../../types/results.type'

interface ParticularScore {
  word: string
  scores: number[]
}

export default function Results() {
  const { recordBlob, setRecordBlob, lesson } = useContext(AppContext)
  const [overallScores, setOverallScores] = useState<Score | null>(null)
  const [particularScores, setParticularScores] = useState<ParticularScore[] | null>(null)

  console.log('lesson: ', lesson)

  useEffect(() => {
    const API = import.meta.env.VITE_SPEECH_SERVICE_API
    const formData = new FormData()
    formData.append('stream', recordBlob.blob)
    console.log('stream', recordBlob.blob)
    formData.append('text', lesson?.word ?? '')
    console.log('formData', formData)
    fetch(API, {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const overall: Score = {
          accuracyScore: data.accuracyScore,
          completenessScore: data.completenessScore,
          fluencyScore: data.fluencyScore,
          pronunciationScore: data.pronunciationScore
        }
        const particular: ParticularScore[] = []
        const words = data.detailResult.Words
        for (let word of words) {
          const scores = []
          for (let phoneme of word.Phonemes) {
            scores.push(phoneme.PronunciationAssessment.AccuracyScore)
          }
          particular.push({
            word: word.Word,
            scores
          } as ParticularScore)
        }
        setOverallScores(overall)
        setParticularScores(particular)
        setRecordBlob(null)
        resultsApi
          .createResult({ lessonId: lesson?.lessonId || '', content: overall })
          .then(() => {})
          .catch((err) => {
            console.log(err)
          })
      })
  }, [])
  return (
    <div>
      {/* Breadcrumb */}
      <Breadcrumb
        className='text-lg font-bold'
        separator='>'
        items={[
          {
            title: `${lesson?.topicName}`,
            href: ''
          },
          {
            title: `${lesson?.word}`
          }
        ]}
      />

      {/* Đánh giá chung */}
      <div>
        <div className='mt-10 text-xl font-semibold text-primary'>Đánh giá chung</div>
        <div className='mt-6 grid grid-cols-2 gap-x-3 gap-y-6'>
          <CircularProgressBar percent={overallScores?.accuracyScore ?? 0} text='Độ chính xác' />
          <CircularProgressBar percent={overallScores?.pronunciationScore ?? 0} text='Độ phát âm' />
          <CircularProgressBar percent={overallScores?.completenessScore ?? 0} text='Độ hoàn thiện' />
          <CircularProgressBar percent={overallScores?.fluencyScore ?? 0} text='Độ trôi chảy' />
        </div>
      </div>
      {/* Đánh giá chi tiết */}
      <div>
        <div className='mt-10 text-xl font-semibold text-primary'>Đánh giá chi tiết</div>
        <div className='mt-6 flex flex-row flex-wrap items-center justify-evenly'>
          {/* <WordScore word='Bạn' scores={[17, 90, 44]} />
          <WordScore word='bè' scores={[50, 81]} /> */}
          {particularScores?.map((word) => <WordScore word={word.word} scores={word.scores} />)}
        </div>
      </div>
      {/* Nav */}
      <div className='mt-10 flex items-center justify-center'>
        <Link
          to={`${path.lessons}/${lesson?.lessonId}`}
          className='text-semibold mr-2 w-[45%] rounded-lg border-[1px] border-primary bg-primary px-4 py-2 text-center text-white hover:bg-blue-600 hover:text-white'
        >
          Xem lại từ
        </Link>
        <Link
          to={path.home}
          className='text-semibold ml-2 w-[45%] rounded-lg border-[1px] border-primary bg-white px-4 py-2 text-center text-primary hover:bg-slate-50'
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  )
}

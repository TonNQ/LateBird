import { useContext, useState } from 'react'
import { ReactMic } from 'react-mic'
import { Link } from 'react-router-dom'
import path from '../../constants/path'
import { AppContext } from '../../contexts/app.context'

interface Props {
  hideRecorder: () => void
}

export default function Recorder({ hideRecorder }: Props) {
  const { setRecordBlob, setText } = useContext(AppContext)
  const [record, setRecord] = useState(false)
  const [myAudioSrc, setMyAudioSrc] = useState<string | null>(null)
  const [currentBlob, setCurrentBlob] = useState<any>(null)

  const startRecording = () => {
    setRecord(true)
  }

  const stopRecording = () => {
    setRecord(false)
  }

  const onData = (recordedBlob: any) => {
    console.log('chunk of real-time data is: ', recordedBlob)
  }

  const onStop = async (recordedBlob: any) => {
    console.log('recordedBlob is: ', recordedBlob)
    const audioSrc = URL.createObjectURL(recordedBlob.blob)
    setMyAudioSrc(audioSrc)
    setCurrentBlob(recordedBlob)
  }

  const removeRecord = () => {
    setMyAudioSrc(null)
    setCurrentBlob(null)
    setText(null)
  }

  const redirectToResultsPage = () => {
    setText('con kiến cắn con cá chết con voi')
    setRecordBlob(currentBlob)
    console.log('redirect')
  }

  return (
    <div className='relative flex h-[250px] w-[350px] items-center justify-center rounded-lg bg-slate-100 shadow-lg'>
      <ReactMic record={record} onStop={onStop} onData={onData} visualSetting='sinewave' className='hidden' />
      <div
        className='absolute right-4 top-4 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-slate-200 shadow-lg hover:bg-slate-300'
        onClick={hideRecorder}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-[30px] w-[30px]'>
          <path
            fillRule='evenodd'
            d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
          />
        </svg>
      </div>

      {!myAudioSrc && (
        <div className='flex w-full flex-col items-center justify-center'>
          <button
            onClick={record ? stopRecording : startRecording}
            type='button'
            className='flex h-[80px] w-[80px] items-center justify-center rounded-full border border-red-700 bg-red-700 p-0 hover:border-red-900 hover:bg-red-900'
          >
            {!record && (
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' className='h-[40px] w-[40px]'>
                <path d='M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z' />
                <path d='M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z' />
              </svg>
            )}
            {record && <div className='h-[30px] w-[30px] rounded-sm bg-white'></div>}
          </button>
          <div className='text-md mt-4 font-medium'>
            {record ? 'Nhấn vào nút để dừng ghi âm' : 'Nhấn vào nút để bắt đầu ghi âm'}
          </div>
        </div>
      )}
      {myAudioSrc && (
        <div className='flex flex-col items-center justify-center'>
          <div className='text-lg font-medium'>Bạn đã ghi âm thành công</div>
          <div className='mt-6 flex items-center justify-center'>
            <Link
              to={path.results}
              className='mr-2 rounded-lg border-[1px] border-primary bg-primary px-4 py-2 text-white hover:bg-blue-600 hover:text-white'
              type='button'
              onClick={redirectToResultsPage}
            >
              Xem kết quả
            </Link>
            <button
              className='ml-2 rounded-lg border-[1px] border-primary bg-white px-4 py-2 text-primary hover:bg-slate-50'
              type='button'
              onClick={removeRecord}
            >
              Ghi âm lại
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

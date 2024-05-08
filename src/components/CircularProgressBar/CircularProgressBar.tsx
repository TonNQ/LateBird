import { Progress } from 'antd'
import type { ProgressProps } from 'antd'

interface Props {
  percent: number
  text: string
}

const twoColors: ProgressProps['strokeColor'] = {
  '0%': '#4C6FFF',
  '100%': '#BB65FF'
}

export default function CircularProgressBar({ percent, text }: Props) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Progress type='circle' percent={percent} strokeColor={twoColors} size={100} />
      <div className='mt-2 font-medium text-title'>{text}</div>
    </div>
  )
}

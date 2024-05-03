import { Progress } from 'antd'

interface Props {
  percent: number
  color?: string
}

export default function ProgressBar({ percent, color }: Props) {
  return (
    <div className='w-full'>
      <Progress percent={percent} strokeColor={color} />
    </div>
  )
}

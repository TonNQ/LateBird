import ProgressBar from '../ProgressBar'

interface Props {
  icon: string
  primaryColor: string
  secondaryColor: string
  quantity: number
  title: string
  description: string
  percent: number
}

export default function StatCard({ icon, primaryColor, secondaryColor, quantity, title, description, percent }: Props) {
  const gradientStyle = {
    background: `linear-gradient(to bottom, ${secondaryColor}, ${primaryColor})`
  }
  return (
    <div className='rounded-lg bg-white p-4 shadow-lg'>
      <div className='mb-2 flex items-center'>
        <div className='flex h-[50px] min-w-[50px] items-center justify-center rounded-full' style={gradientStyle}>
          <img src={icon} alt='book icon' className='h-[30px] w-[30px] text-white' />
        </div>
        <div className='ml-6 flex flex-col'>
          <div className='text-2xl font-semibold' style={{ color: `${secondaryColor}` }}>
            {quantity}
          </div>
          <div className='text-md font-normal text-paragraph'>{title}</div>
        </div>
      </div>
      <div className='mt-4 text-sm font-light'>{description}</div>
      <ProgressBar percent={percent} color={primaryColor} />
    </div>
  )
}

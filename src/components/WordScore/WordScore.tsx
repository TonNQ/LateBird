function percentageToColor(percent: number) {
  // Chuyển đổi phần trăm thành giá trị màu từ 0 đến 255
  const red = Math.min(255, Math.round((255 * (100 - percent)) / 50))
  const green = Math.min(200, Math.round((200 * percent) / 50))
  // Tạo màu từ giá trị RGB
  return `rgb(${red}, ${green}, 0)`
}

interface Props {
  word: string
  scores: number[]
}

export default function WordScore({ word, scores }: Props) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='pl-1 text-3xl capitalize tracking-[8px]'>{word}</div>
      <div className='flex items-center justify-center text-lg'>
        {scores.length > 0 &&
          scores.map((score, index) => (
            <div
              key={index + score}
              className='mx-1 h-[40px] font-semibold'
              style={{ color: percentageToColor(score) }}
            >
              {score}
            </div>
          ))}
        {scores.length === 0 && <div className='mx-1 h-[40px] font-semibold'></div>}
      </div>
    </div>
  )
}

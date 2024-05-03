import StatCard from '../../components/StatCard'
import VocabCard from '../../components/VocabCard'

export default function Home() {
  return (
    <div>
      {/* Thống kê */}
      <div className='grid grid-cols-1 gap-3'>
        <StatCard
          icon='src/assets/success.svg'
          primaryColor='#17E783'
          secondaryColor='#20AF62'
          quantity={300}
          title='Từ phát âm đạt'
          description='Độ chính xác trung bình: '
          percent={90}
        />
        <StatCard
          icon='src/assets/fail.svg'
          primaryColor='#FF3737'
          secondaryColor='#FFA674'
          quantity={23}
          title='Từ phát âm chưa đạt'
          description='Độ chính xác trung bình: '
          percent={23}
        />
        <StatCard
          icon='src/assets/book.svg'
          primaryColor='#4C6FFF'
          secondaryColor='#BB65FF'
          quantity={300}
          title='Chủ đề đã học'
          description='Hoàn thành: '
          percent={85}
        />
      </div>
      {/* Các từ cần ôn tập */}
      <div className='mb-4 mt-8 text-2xl font-semibold text-title'>Các từ cần ôn tập (3)</div>
      <div className='grid grid-cols-2 gap-3'>
        <VocabCard word='Trường học' subject='Địa điểm' viewers={121} percentage={27} />
        <VocabCard word='Chùa' subject='Địa điểm' viewers={87} percentage={80} />
        <VocabCard word='Bảng' subject='Trường học' viewers={100} percentage={65} />
      </div>
      {/* Đề xuất */}
      <div className='mb-4 mt-8 text-2xl font-semibold text-title'>Đề xuất</div>
      <div className='grid grid-cols-2 gap-3'>
        <VocabCard word='Trường học' subject='Địa điểm' viewers={121} />
        <VocabCard word='Chùa' subject='Địa điểm' viewers={87} />
        <VocabCard word='Bảng' subject='Trường học' viewers={100} />
      </div>
    </div>
  )
}

import { Select } from 'antd'
import VocabCard from '../../components/VocabCard'

export default function Discover() {
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
        <input type='search' placeholder='Tìm kiếm' className='ml-4 h-full flex-grow outline-none' />
      </div>
      <div className='mt-4 flex w-full items-center justify-between'>
        <div className='flex w-[45%] flex-col justify-center'>
          <div className='mb-1'>Tìm kiếm theo: </div>
          <Select className='w-full' size='large' defaultValue='subject'>
            <Select.Option value='subject'>Chủ đề</Select.Option>
            <Select.Option value='word'>Từ vựng</Select.Option>
          </Select>
        </div>
        <div className='flex w-[45%] flex-col justify-center'>
          <div className='mb-1'>Sắp xếp theo: </div>
          <Select className='w-full' size='large' defaultValue='subject'>
            <Select.Option value='subject'>Thứ tự</Select.Option>
            <Select.Option value='word'>Phổ biến nhất</Select.Option>
          </Select>
        </div>
      </div>
      {/* Kết quả tìm được */}
      <div className='mb-4 mt-6 text-2xl font-semibold text-title'>Kết quả tìm được</div>
      <div className='grid grid-cols-2 gap-3'>
        <VocabCard word='Trường học' subject='Địa điểm' viewers={121} percentage={27} />
        <VocabCard word='Chùa' subject='Địa điểm' viewers={87} percentage={80} />
        <VocabCard word='Bảng' subject='Trường học' viewers={100} percentage={65} />
        <VocabCard word='Trường học' subject='Địa điểm' viewers={121} />
        <VocabCard word='Chùa' subject='Địa điểm' viewers={87} />
        <VocabCard word='Bảng' subject='Trường học' viewers={100} />
      </div>
    </div>
  )
}

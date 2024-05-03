import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean | null>(null)
  const toggleSidebarVisible = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }
  return (
    <div className='relative block h-[100vh] bg-grayShade'>
      {/* Sidebar */}
      <Sidebar isVisible={isSidebarVisible} toggleVisible={toggleSidebarVisible} />
      {/* Header */}
      <div className='fixed left-0 top-0 flex h-[70px] w-full items-center justify-between bg-white'>
        <div className='flex h-full items-center p-6' onClick={toggleSidebarVisible}>
          <MenuIcon sx={{ fontSize: `28px` }} />
        </div>
        <div className='mr-6 flex h-full items-center'>
          <div className='relative h-[40px] w-[40px] min-w-[40px]'>
            <img
              src='https://plus.unsplash.com/premium_photo-1714115034964-16b20994142a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='avatar user'
              className='absolute left-0 top-0 mx-auto h-full w-full rounded-full border-[1px] border-gray-200 object-cover'
            />
          </div>
          <div className='ml-2 flex flex-col'>
            <div className='text-md max-w-[150px] overflow-hidden truncate font-semibold text-title'>Toàn</div>
            <div className='text-sm font-extralight text-paragraph'>
              Level <span>3</span>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute left-0 top-[70px] w-full bg-grayShade'>{children}</div>
    </div>
  )
}

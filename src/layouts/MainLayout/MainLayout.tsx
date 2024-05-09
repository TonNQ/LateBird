import MenuIcon from '@mui/icons-material/Menu'
import { useCallback, useContext, useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { User } from '../../types/users.type'
import { AppContext } from '../../contexts/app.context'
import usersApi from '../../apis/users.api'
import avatarDefault from 'src/assets/avatar_default.jpg'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const { user, setUser, isAuthenticated } = useContext(AppContext)
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean | null>(null)

  const toggleSidebarVisible = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  const getInformation = useCallback(() => {
    if (isAuthenticated) {
      usersApi
        .getInformation()
        .then((response) => {
          setUser(response.data as User)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [isAuthenticated, setUser])

  useEffect(() => {
    getInformation()
  }, [getInformation])

  return (
    <div className='relative block h-[100vh] bg-grayShade'>
      {/* Sidebar */}
      <Sidebar isVisible={isSidebarVisible} toggleVisible={toggleSidebarVisible} />
      {/* Header */}
      <div className='fixed left-0 top-0 z-50 flex h-[70px] w-full items-center justify-between bg-white shadow-md'>
        <div className='flex h-full items-center p-6' onClick={toggleSidebarVisible}>
          <MenuIcon sx={{ fontSize: `28px` }} />
        </div>
        <div className='mr-6 flex h-full items-center'>
          <div className='relative h-[40px] w-[40px] min-w-[40px]'>
            <img
              src={isAuthenticated ? user?.avatar : avatarDefault}
              alt='avatar user'
              className='absolute left-0 top-0 mx-auto h-full w-full rounded-full border-[1px] border-gray-200 object-cover'
            />
          </div>
          <div className='ml-2 flex flex-col'>
            <div className='text-md max-w-[150px] overflow-hidden truncate font-semibold text-title'>
              {isAuthenticated ? user?.fullname : 'Khách'}
            </div>
            <div className='text-sm font-extralight text-paragraph'>{isAuthenticated ? user?.birthday : ''}</div>
          </div>
        </div>
      </div>
      <div className='absolute left-0 top-[70px] w-full bg-grayShade p-6'>{children}</div>
    </div>
  )
}

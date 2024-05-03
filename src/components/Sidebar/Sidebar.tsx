import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import path from '../../constants/path'
import logo from 'src/assets/logo.svg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

interface Props {
  isVisible: boolean | null
  toggleVisible: () => void
}

export default function Sidebar({ isVisible, toggleVisible }: Props) {
  return (
    <div
      className={classNames(
        'from-mainBlue to-mainPurple/90 absolute left-0 top-0 z-50 flex h-full w-[230px] flex-col bg-gradient-to-b px-3 py-6',
        {
          'slide-in': isVisible === true,
          'slide-out': isVisible === false,
          'tranform -translate-x-full': isVisible === null
        }
      )}
    >
      <div className='absolute left-[225px] top-[25px] '>
        <div
          className={classNames(
            'from-mainBlue to-mainPurple/80 flex h-[40px] w-[40px] items-center justify-center rounded-md bg-gradient-to-r',
            {
              visible: isVisible,
              hidden: !isVisible
            }
          )}
          onClick={toggleVisible}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: `20px`, color: `white` }} />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <img src={logo} alt='logo' className='h-[50px] w-[50px]' />
        <div className='ml-2 text-xl tracking-wider text-white'>Late bird</div>
      </div>
      <div className='mt-4 flex flex-grow flex-col justify-between'>
        <div className='w-full'>
          <NavLink
            to={path.home}
            className={({ isActive }) =>
              classNames('my-1 flex w-[100%] items-center p-3 text-left text-white hover:text-white', {
                'rounded-lg bg-primaryShade/20': isActive,
                'bg-transparent': !isActive
              })
            }
            onClick={toggleVisible}
          >
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
                d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              />
            </svg>
            <span className='ml-4 font-light tracking-wider'>Trang chủ</span>
          </NavLink>
          <NavLink
            to={path.discover}
            className={({ isActive }) =>
              classNames('my-1 flex w-[100%] items-center p-3 text-left text-white hover:text-white', {
                'rounded-lg bg-primaryShade/20': isActive,
                'bg-transparent': !isActive
              })
            }
            onClick={toggleVisible}
          >
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
                d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
              />
            </svg>
            <span className='ml-4 font-light tracking-wider'>Tra cứu</span>
          </NavLink>
          <NavLink
            to={path.roadmap}
            className={({ isActive }) =>
              classNames('my-1 flex w-[100%] items-center p-3 text-left text-white hover:text-white', {
                'rounded-lg bg-primaryShade/20': isActive,
                'bg-transparent': !isActive
              })
            }
            onClick={toggleVisible}
          >
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
                d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
              />
            </svg>
            <span className='ml-4 font-light tracking-wider'>Lộ trình</span>
          </NavLink>
        </div>
        <div className='w-full'>
          <NavLink
            to={path.profile}
            className={({ isActive }) =>
              classNames('my-1 flex w-[100%] items-center p-3 text-left text-white hover:text-white', {
                'rounded-lg bg-primaryShade/20': isActive,
                'bg-transparent': !isActive
              })
            }
            onClick={toggleVisible}
          >
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
                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>

            <span className='ml-4 font-light tracking-wider'>Tài khoản</span>
          </NavLink>
          <div className='mt-2 flex w-[100%] items-center p-3 text-left text-white hover:text-white'>
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
                d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15'
              />
            </svg>
            <span className='ml-4 font-light tracking-wider'>Đăng xuất</span>
          </div>
        </div>
      </div>
    </div>
  )
}

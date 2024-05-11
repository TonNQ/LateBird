import deafLogo from 'src/assets/deaf_logo.png'
import signLang from 'src/assets/sign_lang.png'

interface Props {
  children?: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className='relative flex h-[100vh] flex-col items-center overflow-hidden bg-white'>
      <img src={deafLogo} alt='deaf logo' className='absolute -bottom-20 -right-20 w-[250px]' />
      <img src={deafLogo} alt='deaf logo' className='absolute -bottom-32 -left-36 w-[250px]' />
      <div className='mb-16 flex h-full w-full flex-col items-center justify-center px-12'>
        <img src={signLang} alt='deaf logo' className='z-10 mb-4 w-[140px]' />
        <div className='w-full'>{children}</div>
      </div>
    </div>
  )
}

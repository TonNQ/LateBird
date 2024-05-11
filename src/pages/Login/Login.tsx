import { Link, useNavigate } from 'react-router-dom'
import { Schema, schema } from '../../utils/rules'
import { toast } from 'react-toastify'
import path from '../../constants/path'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import authApi from '../../apis/auth.api'
import Input from '../../components/Input'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'

type FormData = Pick<Schema, 'username' | 'password'>
const loginSchema = schema.pick(['username', 'password'])

export default function Login() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })
  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.login(body)
  })
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        // console.log(data.data)
        console.log(data)
        if (data !== undefined) {
          setIsAuthenticated(true)
          navigate(path.home)
        }
      },
      onError: (error: any) => {
        const formError = error.response?.data
        toast.error(formError?.message)
      }
    })
  })
  return (
    <div className='z-50 flex w-full flex-col items-center'>
      <div className='text-3xl font-semibold uppercase tracking-widest text-darkBlue'>Đăng nhập</div>
      <form action='' onSubmit={onSubmit} className='z-50 mt-4 w-full'>
        <Input
          name='username'
          register={register}
          type='text'
          placeholder='Nhập tên tài khoản'
          labelName='Tên tài khoản'
          errorMessage={errors.username?.message}
        />
        <Input
          name='password'
          register={register}
          type='password'
          placeholder='Nhập mật khẩu'
          labelName='Mật khẩu của bạn'
          errorMessage={errors.password?.message}
        />
        <div className='mt-2 '>
          <Link to={path.forget_password} className='text-sm font-medium text-darkBlue hover:text-secondary'>
            Quên mật khẩu?
          </Link>
        </div>

        <div className='mt-4 w-full'>
          <button className='w-full rounded-lg bg-darkBlue px-2 py-2 text-center text-lg font-semibold uppercase text-white hover:border-secondary hover:bg-secondary'>
            Đăng nhập
          </button>
        </div>
        <div className='mt-4 text-center'>
          <span>Bạn chưa có tài khoản?</span>
          <Link to={path.register} className='ml-2 text-darkBlue'>
            Đăng ký
          </Link>
        </div>
        <div className='my-2 text-center text-sm text-paragraph'>hoặc</div>
        <div className='text-center'>
          <Link to={path.discover} className='font-semibold text-darkBlue underline'>
            Truy cập với tư cách khách
          </Link>
        </div>
      </form>
    </div>
  )
}

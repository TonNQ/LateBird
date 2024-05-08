import { Link, useNavigate } from 'react-router-dom'
import { Schema, schema } from '../../utils/rules'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import authApi from '../../apis/auth.api'
import { omit } from 'lodash'
import path from '../../constants/path'
import { toast } from 'react-toastify'
import { AuthErrorResponse } from '../../types/auth.type'
import { isAxiosBadRequest } from '../../utils/utils'
import Input from '../../components/Input'

type FormData = Pick<Schema, 'username' | 'password' | 'confirm_password'>
const registerSchema = schema.pick(['username', 'password', 'confirm_password'])

export default function Register() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const registerMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.register(body)
  })
  const onSubmit = handleSubmit((data) => {
    const account = omit(data, ['confirm_password'])
    registerMutation.mutate(account, {
      onSuccess: () => {
        toast.success('Đăng ký thành công', {
          autoClose: 2000,
          className: 'absolute w-3/4 top-2 right-1'
        })
        setTimeout(() => {
          navigate(path.login)
        }, 2000)
      },
      onError: (error) => {
        if (isAxiosBadRequest<AuthErrorResponse>(error)) {
          toast.error(
            error.response?.data.error === 'Username already exists'
              ? 'Tài khoản đã tồn tại'
              : error.response?.data.error,
            {
              autoClose: 3000,
              className: 'absolute w-3/4 top-2 right-1'
            }
          )
        }
      }
    })
  })
  return (
    <div className='z-50 flex w-full flex-col items-center'>
      <div className='text-darkBlue text-3xl font-semibold uppercase tracking-widest'>Đăng ký</div>
      <form action='' onSubmit={onSubmit} className='z-50 mt-2 w-full'>
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
        <Input
          name='confirm_password'
          register={register}
          type='password'
          placeholder='Nhập lại mật khẩu'
          labelName='Nhập lại mật khẩu'
          errorMessage={errors.confirm_password?.message}
        />

        <div className='mt-2 w-full'>
          <button className='bg-darkBlue w-full rounded-lg px-2 py-2 text-center text-lg font-semibold uppercase text-white hover:border-secondary hover:bg-secondary'>
            Đăng ký
          </button>
        </div>
        <div className='mt-2 text-center'>
          <span>Bạn đã có tài khoản?</span>
          <Link to={path.login} className='text-darkBlue ml-2'>
            Đăng nhập
          </Link>
        </div>
      </form>
    </div>
  )
}

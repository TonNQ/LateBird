import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

// current_password: dùng cho đổi mật khẩu, password = new_password
type Rules = {
  [key in 'username' | 'password' | 'confirm_password' | 'current_password']?: RegisterOptions
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  username: {
    required: {
      value: true,
      message: 'Tên tài khoản là bắt buộc'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Tên tài khoản không đúng định dạng'
    },
    minLength: {
      value: 8,
      message: 'Độ dài tối thiểu là 8 kí tự'
    },
    maxLength: {
      value: 20,
      message: 'Độ dài tối đa là 20 kí tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Mật khẩu là bắt buộc'
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
      message: 'Mật khẩu có ít nhất một kí tự chữ và một kí tự số'
    },
    minLength: {
      value: 8,
      message: 'Mật khẩu tối thiểu 8 kí tự'
    },
    maxLength: {
      value: 20,
      message: 'Mật khẩu tối đa 20 kí tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại mật khẩu là bắt buộc'
    },
    minLength: {
      value: 8,
      message: 'Mật khẩu tối thiểu 8 kí tự'
    },
    maxLength: {
      value: 20,
      message: 'Mật khẩu tối đa 20 kí tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhập lại password không khớp'
        : undefined
  },
  current_password: {
    required: {
      value: true,
      message: 'Mật khẩu hiện tại là bắt buộc'
    },
    minLength: {
      value: 8,
      message: 'Mật khẩu tối thiểu 8 kí tự'
    },
    maxLength: {
      value: 20,
      message: 'Mật khẩu tối đa 20 kí tự'
    }
  }
})

export const schema = yup.object({
  username: yup
    .string()
    .required('Tên tài khoản là bắt buộc')
    .min(8, 'Độ dài tối thiểu là 8 kí tự')
    .max(20, 'Độ dài tối đa là 20 kí tự'),
  password: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(8, 'Mật khẩu tối thiểu 8 kí tự')
    .max(20, 'Mật khẩu tối đa 20 kí tự')
    .matches(/^(?=.*[A-Za-z])(?=.*\d).+$/, 'Mật khẩu có ít nhất một kí tự chữ và một kí tự số'),
  confirm_password: yup
    .string()
    .required('Nhập lại mật khẩu là bắt buộc')
    .min(8, 'Mật khẩu tối thiểu 8 kí tự')
    .max(20, 'Mật khẩu tối đa 20 kí tự')
    .oneOf([yup.ref('password')], 'Nhập lại mật khẩu không đúng'),
  current_password: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(8, 'Mật khẩu tối thiểu 8 kí tự')
    .max(20, 'Mật khẩu tối đa 20 kí tự')
    .matches(/^(?=.*[A-Za-z])(?=.*\d).+$/, 'Mật khẩu có ít nhất một kí tự chữ và một kí tự số')
})

export type Schema = yup.InferType<typeof schema>

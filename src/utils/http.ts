import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import { clearLocalStorage, getTokenFromLocalStorage, setTokenToLocalStorage } from './auth'
import path from '../constants/path'
import { AuthErrorResponse, AuthSuccessResponse } from '../types/auth.type'

class Http {
  instance: AxiosInstance
  private token: string
  constructor() {
    this.token = getTokenFromLocalStorage()
    this.instance = axios.create({
      baseURL: 'http://localhost:3007/api',
      timeout: 60 * 1000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.token) {
          config.headers.Authorization = this.token
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // Response interceptors
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        console.log('url', url)
        console.log('pathlogin', path.login)
        if (url === '/users' + path.login) {
          const data = response.data as AuthSuccessResponse
          console.log('data', data)
          this.token = data.token
          setTokenToLocalStorage(this.token)
        } else if (url === path.logout) {
          this.token = ''
          clearLocalStorage()
        }
        return response
      },
      (error: AxiosError<AuthErrorResponse>) => {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          if (
            error.response?.status === HttpStatusCode.Unauthorized
          ) {
            toast.error('Tài khoản hoặc mật khẩu không đúng', {
              autoClose: 3000,
              className: 'w-3/4 absolute top-2 right-1'
            })
            return
          } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const data: any | undefined = error.response?.data
            // const message = data.message || error.message
            const message = error.message
            toast.error(data || message)
          }
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http

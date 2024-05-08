// import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from 'axios'
// import { toast } from 'react-toastify'

// import { clearLocalStorage, getTokenFromLocalStorage, setTokenToLocalStorage } from './auth'
// import path from '../constants/path'

// class Http {
//   instance: AxiosInstance
//   private accessToken: string
//   constructor() {
//     this.accessToken = getTokenFromLocalStorage()
//     this.instance = axios.create({
//       baseURL: 'http://localhost:3007/api',
//       timeout: 60 * 1000,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     this.instance.interceptors.request.use(
//       (config) => {
//         if (this.accessToken) {
//           config.headers.Authorization = this.accessToken
//         }
//         return config
//       },
//       (error) => {
//         return Promise.reject(error)
//       }
//     )

//     // Response interceptors
//     this.instance.interceptors.response.use(
//       (response) => {
//         const { url } = response.config
//         if (url === path.login) {
//           const data = response.data as AuthResponse
//           this.accessToken = data.data.access_token
//           setTokenToLocalStorage(this.accessToken)
//         } else if (url === path.logout) {
//           this.accessToken = ''
//           clearLocalStorage()
//         }
//         return response
//       },
//       (error: AxiosError<AuthResponse>) => {
//         if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
//           if (
//             error.response?.status === HttpStatusCode.Unauthorized &&
//             error.response.data.message === 'Vui lòng đăng nhập để tiếp tục'
//           ) {
//             console.log('Login')
//             refreshToken().then(() => {
//               if (error.response) {
//                 error.response.config.headers.Authorization = getAccessTokenFromLocalStorage()
//               }
//             })
//             // this.instance(error.response.config)
//             return
//           } else {
//             // eslint-disable-next-line @typescript-eslint/no-explicit-any
//             const data: any | undefined = error.response?.data
//             // const message = data.message || error.message
//             const message = error.message
//             toast.error(data || message)
//           }
//         }
//         return Promise.reject(error)
//       }
//     )
//   }
// }

// const http = new Http().instance

// export default http

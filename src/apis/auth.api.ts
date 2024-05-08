import { AuthErrorResponse, AuthSuccessResponse } from '../types/auth.type'
import http from '../utils/http'

const authApi = {
  register(body: { username: string; password: string }) {
    return http.post<AuthSuccessResponse | AuthErrorResponse>('/users/register', body)
  },
  login(body: { username: string; password: string }) {
    return http.post<AuthSuccessResponse | AuthErrorResponse>('/users/login', body)
  },
  logout() {
    return http.post<AuthSuccessResponse | AuthErrorResponse>('/users/logout')
  }
}

export default authApi

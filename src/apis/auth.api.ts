import { ErrorResponse, AuthSuccessResponse } from '../types/users.type'
import http from '../utils/http'

const authApi = {
  register(body: { username: string; password: string }) {
    return http.post<AuthSuccessResponse | ErrorResponse>('/users/register', body)
  },
  login(body: { username: string; password: string }) {
    return http.post<AuthSuccessResponse | ErrorResponse>('/users/login', body)
  },
  logout() {
    return http.post<AuthSuccessResponse | ErrorResponse>('/users/logout')
  }
}

export default authApi

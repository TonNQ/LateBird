import { ErrorResponse, User } from '../types/users.type'
import http from '../utils/http'

const usersApi = {
  getInformation() {
    return http.get<User | ErrorResponse>('/users/information')
  }
}

export default usersApi

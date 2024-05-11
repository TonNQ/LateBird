export type AuthSuccessResponse = {
  message: string
  token?: string
  user?: {
    userId: string
    username: string
  }
}

export type ErrorResponse = {
  error: string
}

export interface User {
  userId: string
  fullname: string
  createAt: string
  birthday: string
  avatar: string
}
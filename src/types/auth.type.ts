export type AuthSuccessResponse = {
  message: string
  token?: string
  user?: {
    userId: string
    username: string
  }
}

export type AuthErrorResponse = {
  error: string
}

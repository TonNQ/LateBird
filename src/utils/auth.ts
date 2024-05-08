// Lấy token từ local storage
export const setTokenToLocalStorage = (token: string) => {
  localStorage.setItem('token', token)
}

// Xóa token khỏi local storage
export const clearLocalStorage = () => {
  localStorage.removeItem('token')
}

// Lấy token từ local storage
export const getTokenFromLocalStorage = () => {
  return localStorage.getItem('token') || ''
}

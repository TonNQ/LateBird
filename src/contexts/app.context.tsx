import { createContext, useState } from 'react'
import { getTokenFromLocalStorage } from '../utils/auth'
import { User } from '../types/users.type'
import { Lesson } from '../types/lessons.type'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  recordBlob: any
  setRecordBlob: React.Dispatch<React.SetStateAction<any>>
  lesson: Lesson | null
  setLesson: React.Dispatch<React.SetStateAction<Lesson | null>>
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getTokenFromLocalStorage()),
  setIsAuthenticated: () => null,
  user: null,
  setUser: () => null,
  recordBlob: null,
  setRecordBlob: () => null,
  lesson: null,
  setLesson: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [user, setUser] = useState<User | null>(initialAppContext.user)
  const [recordBlob, setRecordBlob] = useState<any>(initialAppContext.recordBlob)
  const [lesson, setLesson] = useState<Lesson | null>(initialAppContext.lesson)
  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, recordBlob, setRecordBlob, lesson, setLesson }}>
      {children}
    </AppContext.Provider>
  )
}

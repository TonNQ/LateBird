import { createContext, useState } from 'react'
import { getTokenFromLocalStorage } from '../utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  recordBlob: any
  setRecordBlob: React.Dispatch<React.SetStateAction<any>>
  text: string | null
  setText: React.Dispatch<React.SetStateAction<string | null>>
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getTokenFromLocalStorage()),
  setIsAuthenticated: () => null,
  recordBlob: null,
  setRecordBlob: () => null,
  text: null,
  setText: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [recordBlob, setRecordBlob] = useState<any>(initialAppContext.recordBlob)
  const [text, setText] = useState<string | null>(initialAppContext.text)
  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, recordBlob, setRecordBlob, text, setText }}>
      {children}
    </AppContext.Provider>
  )
}

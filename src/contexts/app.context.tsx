import { createContext, useState } from 'react'

interface AppContextInterface {
  recordBlob: any
  setRecordBlob: React.Dispatch<React.SetStateAction<any>>
  text: string | null
  setText: React.Dispatch<React.SetStateAction<string | null>>
}

const initialAppContext: AppContextInterface = {
  recordBlob: null,
  setRecordBlob: () => null,
  text: null,
  setText: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [recordBlob, setRecordBlob] = useState<any>(initialAppContext.recordBlob)
  const [text, setText] = useState<string | null>(initialAppContext.text)
  return <AppContext.Provider value={{ recordBlob, setRecordBlob, text, setText }}>{children}</AppContext.Provider>
}

import React, { createContext } from "react"

export const FactsContext = createContext(null)

export default function FactsContextProvider({ children }) {
  const [factsData, setFactsData] = useState([])

  return (
    <FactsContext.Provider value={{ factsData, setFactsData }}>
      {children}
    </FactsContext.Provider>
  )
}

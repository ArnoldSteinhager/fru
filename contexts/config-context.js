import React, { createContext } from "react"

const ConfigContext = createContext(null)

export default function ConfigContextProvider({ children }) {
  const [configData, setConfigData] = useState({
    language: "",
    isDarkMode: false,
  })

  return (
    <ConfigContext.Provider value={{ configData, setConfigData }}>
      {children}
    </ConfigContext.Provider>
  )
}

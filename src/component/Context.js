import React, { createContext } from 'react'
import jsonData from "../data/list.json"

const Context = ({children}) => {
  return (
    <DataContext.Provider value={{jsonData}}>
        {children}
    </DataContext.Provider>
  )
}

export const DataContext = createContext(null);
export default Context
import { createContext, useEffect, useState } from "react";

const QuioscoContext = createContext()


export const QuioscoProvider = ({ children }) => {
  
  return (
    <QuioscoContext.Provider 
      value={{

      }}
    >
      { children }
    </QuioscoContext.Provider>
  )
}

export default QuioscoContext
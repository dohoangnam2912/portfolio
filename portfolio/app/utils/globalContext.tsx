'use client';
import React, { useState } from 'react';


const GlobalContext = React.createContext({
    toggle: false,
    handleToggle: () => {},
  });
  
export const GlobalProvider = ({children} : {children: React.ReactNode}) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
      setToggle(!toggle);
      console.log("toggle: ", toggle);
    }
    return (
      <GlobalContext.Provider value={{toggle, handleToggle}}>
        {children}
      </GlobalContext.Provider>
    )
  }
  
  export const useGlobalContext = () => {
    return React.useContext(GlobalContext);
  }
  
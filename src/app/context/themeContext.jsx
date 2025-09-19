'use client'

const { createContext, useState } = require("react")

const ThemeContext=createContext(undefined);

export const  ThemeProvider=(children)=>{
    const [isDarkMode,setIsDarkMode]=useState(false)

    const  toggleTheme=()=>{
        setIsDarkMode(!isDarkMode)
    }

    return(
        <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
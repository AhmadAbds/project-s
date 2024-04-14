import { createContext, useEffect } from "react";
import { useState } from "react";
const themes ={
    dark : {
        background : 'rgba(30, 30, 30, 1)',
        color : 'rgba(255, 255, 255, 1)'
    },
    light : {
        background : 'rgba(255, 255, 255, 1)',
        color : 'rgba(30, 30, 30, 1)'
    }
}
export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false)
    const theme = isDark ? themes.dark : themes.light;

    const toggleTheme=()=>{
        localStorage.setItem('isDark', JSON.stringify(!isDark))
        setIsDark(!isDark);
    };
    useEffect(()=>{
        const isDark = localStorage.getItem('isDark')==="true"
        setIsDark(isDark);
    },[])


  return (
    <ThemeContext.Provider value={[{theme , isDark},toggleTheme]}>{children}</ThemeContext.Provider>
  )
}

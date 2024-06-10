import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { TERipple } from "tw-elements-react";
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
type Props = {
  
}

const DarkMode : React.FC<Props> = (props: Props) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('{prefers-color-scheme: dark}'))){
      setTheme("dark");
    }else{
      setTheme("light");;
    }
    console.log(theme);
  }, []);
  useEffect(() => {
    if (theme==="dark"){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
    console.log(theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    return theme;
  }
  
  return (
    <TERipple>
    <button id="theme-toggle" type="button" className="text-gray-500 shadow-[0_0_5px_purple] dark:shadow-[0_0_5px_purple] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-blue-700 rounded-lg text-sm p-2.5" onClick={handleThemeSwitch} >
            { theme==="dark" ? <FaRegMoon className='animate[rotate_360] '/> : <FaRegSun className='hover:animate-spin' />}
          </button>
  </TERipple>
  )
}
export default DarkMode;
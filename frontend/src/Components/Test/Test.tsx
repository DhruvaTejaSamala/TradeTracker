import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { TERipple } from "tw-elements-react";
import "./Test.css";
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
type Props = {
  
}

const Test : React.FC<Props> = (props: Props) => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('{prefers-color-scheme: light}'))){
      setTheme("dark");
    }else{
      setTheme("light");;
    }
    console.log(theme);
  }, []);
  // useEffect(() => {
  //   if (theme==="dark"){
  //     document.documentElement.classList.add("dark");
  //   }else{
  //     document.documentElement.classList.remove("dark");
  //   }
  //   //console.log(theme);
  // }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  
  return (
    
    <div className='h-screen bg-slate-50 dark:bg-slate-900 flex justify-center items-center'>
    <Link to="/login" >
    <TERipple>
      <button
        type="button"
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" 
      >
        Button
      </button>
    </TERipple>
    </Link>
    <div>
    <TERipple>
    <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" onClick={handleThemeSwitch} >
            { theme==="dark" ? <FaRegMoon/> : <FaRegSun />}
          </button>
  </TERipple>
  </div>
  </div>
  )
}

export default Test
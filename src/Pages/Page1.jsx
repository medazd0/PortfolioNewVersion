import { useState,React ,useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Points from '../Ui/Points'
import Main_page1 from '../components/Main_page1'

function Page1() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className='flex min-h-screen  h-screen overflow-hidden'>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Points />
      <Main_page1 />



    </div>
  )
}

export default Page1
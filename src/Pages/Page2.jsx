import { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Points from '../Ui/Points'

import EduSec from '../components/EduSec'
import Cursor from '../components/Cursor'

function Page2() {
  const [darkMode, setDarkMode] = useState(false);
  const [cursorEnabled, setCursorEnabled] = useState(true); // état du curseur

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className='flex min-h-screen h-screen overflow-hidden'>
      {/* on ne rend Cursor que si enabled = true */}
      {cursorEnabled && <Cursor />}
      
      {/* On passe aussi setCursorEnabled à Sidebar */}
      <Sidebar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        cursorEnabled={cursorEnabled} 
        setCursorEnabled={setCursorEnabled}
      />

      <Points />
      <EduSec />
    </div>
  )
}

export default Page2

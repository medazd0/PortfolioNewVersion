import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar.jsx';
import Points from './Ui/Points.jsx';
import Cursor from './components/Cursor.jsx';

// === Tes pages ===
import Main_page1 from './components/mainPages/Main_page1.jsx';
import EduSec from './components/mainPages/EduSec.jsx'
import SkillsSec from './components/mainPages/SkillsSec.jsx';
import ExpSec from './components/mainPages/ExpSec.jsx';
import Prjs from './components/mainPages/ProjctsSec.jsx'
import Contact from './components/mainPages/Contact.jsx'

function App() {
  const [darkMode, setDarkMode] = useState(true);
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
    <Router>
      <div className='dark:bg-[#000000] bg-[#94DAAD] overflow-hidden'>
        <div className='flex min-h-screen h-screen overflow-hidden'>
          {/* on ne rend Cursor que si enabled = true */}
          {cursorEnabled && <Cursor />}

          {/* Sidebar */}
          <Sidebar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            cursorEnabled={cursorEnabled}
            setCursorEnabled={setCursorEnabled}
          />

          <Points />

          {/* === Routes === */}
          <div className="flex-1 overflow-hidden">
           <Routes>
            <Route path="/" element={<Main_page1 />} />
            <Route path="/education" element={<EduSec />} />
            <Route path="/skills" element={<SkillsSec />} />
            <Route path="/experience" element={<ExpSec />} />
            <Route path="/portfolio" element={<Prjs />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>

          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useDisableZoom from "./components/useDisableZoom.jsx"

import Sidebar from './Sidebar/Sidebar.jsx';
import Points from './Ui/Points.jsx';
import Cursor from './components/Cursor.jsx';
import Loader from './components/Loader.jsx';

// === Tes pages ===
import Main_page1 from './components/mainPages/Main_page1.jsx';
import EduSec from './components/mainPages/EduSec.jsx';
import SkillsSec from './components/mainPages/SkillsSec.jsx';
import ExpSec from './components/mainPages/ExpSec.jsx';
import Prjs from './components/mainPages/ProjctsSec.jsx';
import Contact from './components/mainPages/Contact.jsx';
import FullscreenButton from './components/FullscreenButton.jsx';

function App() {
  useDisableZoom();
  const [darkMode, setDarkMode] = useState(true);
  const [cursorEnabled, setCursorEnabled] = useState(true); 
  const [loading, setLoading] = useState(true);

  // Dark mode
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Loader timeout (ex: 3s avant affichage du site)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <div className="dark:bg-[#000000] bg-[#94DAAD] overflow-hidden">
        <div className="flex min-h-screen h-screen overflow-hidden">
          {/* Cursor */}
          {cursorEnabled && <Cursor />}

          {/* Sidebar */}
          <Sidebar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            cursorEnabled={cursorEnabled}
            setCursorEnabled={setCursorEnabled}
          />

          {/* Points */}
          <Points />

          {/* Routes */}
          <div className="flex-1 overflow-hidden">
            <FullscreenButton />
            <Routes>
              <Route path="/" element={<Main_page1 />} />
              <Route path="/about" element={<Main_page1 />} />
              <Route path="/education" element={<EduSec />} />
              <Route path="/skills" element={<SkillsSec />} />
              <Route path="/experience" element={<ExpSec />} />
              <Route path="/portfolio" element={<Prjs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

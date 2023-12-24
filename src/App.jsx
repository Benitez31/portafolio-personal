import React, { useState } from 'react';
import Navigation from './components/Navigation';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Contact from './pages/Contact';
import { LuMenuSquare } from "react-icons/lu";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menu, setMenu] = useState ('activo');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setMenu('activo');
  };
  const handleMenu = () => {
    setMenu(!'activo');
  }

  return (
    <div className='container'>
      <div className={`navigation ${menu === 'activo' ? 'abrir' : ''}`}>
        <Navigation handleItemClick={handleNavigation} />
      </div>
      <LuMenuSquare onClick={handleMenu} className='burguer' />
      <div className='main-content'>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;


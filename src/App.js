import React, { useState, useEffect } from 'react';
import Preloader from '../src/components/Pre';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume/ResumeNew';
import { Route, Routes, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

function App() {
  const [load, upadateLoad] = useState(true);
  const location = useLocation();
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 8000);
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showConfetti && <Confetti width={width - 10} height={height} />}
      <Preloader load={load} />
      <div className='App' id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

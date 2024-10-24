import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles.css';
import AllComp from './components/AllComp';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllComp/>} />
        </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home';
import Games from './components/Games';
import Books from './components/books';
import Movies from './components/Movies';
import Apps from './components/Apps';
import Footer from './components/Footer'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/Home" element={<Home/>} />
      </Routes>

      <Routes>
      <Route path="components/Games" element={<Games/>} />
      <Route path="components/Movies" element={<Movies/>} />
      <Route path="components/Apps" element={<Apps/>} />
      <Route path="components/Books" element={<Books/>} />
      </Routes>



      <Routes>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/Home';

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

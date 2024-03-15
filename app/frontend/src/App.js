// En src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Contenido from './Contenido';
import TopBar from './TopBar';

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Contenido />} />
        <Route path="/about" element={<Inicio />} />
      </Routes>
    </Router>
  );
};

export default App;

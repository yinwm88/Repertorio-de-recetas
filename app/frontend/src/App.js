// En src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Contenido from './Contenido';
import TopBar from './TopBar';
import Container from '@mui/material/Container';

const App = () => {
  return (
    <Router>
      <TopBar />
      <Container maxWidth="xl" style={{ marginTop: '64px' }}>
        
        <Routes>
          <Route path="/" element={<Contenido />} />
          <Route path="/about" element={<Inicio />} />


        </Routes>
      </Container>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import TopBarLP from './TopBarLP';
import { ThemeProvider, Container } from '@mui/material';
import Header from './Header';
import Contenido from './Contenido'; 
import Footer from './Footer';

const LandingPage = () => {
  return (
    <Router>
      <TopBarLP />
      <Container maxWidth="xl" style={{ marginTop: '34px' }}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<Inicio />} />
          <Route path="/contenido" element={<Contenido />} /> 
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
};

export default LandingPage;

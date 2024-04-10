import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Inicio from './Inicio';
import TopBarLP from './TopBarLP';
import { ThemeProvider, Container } from '@mui/material';
import Header from './Header';
import Contenido from '../Contenido';
import Footer from './Footer';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';


// Dentro de LandingPage o un componente similar.
const LandingPage = () => {
  return (
    <>
      <TopBarLP />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<Inicio />} />
          <Route path="/contenido" element={<ContenidoProtected />} />
        </Routes>
      </Container>
      {/* <Footer/> */}
    </>
  );
};

// Componente ContenidoProtected
const ContenidoProtected = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return currentUser ? <Contenido /> : null; // O cualquier componente de "cargando" mientras se verifica
};


export default LandingPage;

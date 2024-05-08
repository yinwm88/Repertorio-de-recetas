import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Inicio from './Inicio';
import TopBarLP from './TopBarLP';
import {Container } from '@mui/material';
import Header from './Header';
import Contenido from '../Contenido';
import { useAuth } from '../../AuthContext';
import Config from '../Configuracion';

const LandingPage = () => {
  const { currentUser, getUserDataFromCookies, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      const user = getUserDataFromCookies();
      if (user) {
        console.log('Usuario encontrado', user);
        
        navigate('/contenido');
      } 
    }
  }, [currentUser, getUserDataFromCookies, login, navigate]);

  return (
    <>
      <TopBarLP />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<Inicio />} />
          <Route path="/contenido" element={<ContenidoProtected />} />
          <Route path="/settings" element={<Config />} />
        </Routes>
      </Container>
    </>
  );
};

const ContenidoProtected = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return currentUser ? <Contenido /> : null;
};

export default LandingPage;

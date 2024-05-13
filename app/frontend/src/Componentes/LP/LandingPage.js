import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Inicio from './Inicio';
import TopBarLP from './TopBarLP';
import {Container } from '@mui/material';
import Header from './Header';
import Contenido from '../Contenido/Contenido';
import { useAuth } from '../../AuthContext';
import Config from '../Configuracion';

const LandingPage = ({isDarkMode,handleThemeChange}) => {
  const { currentUser, getUserDataFromCookies, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
        const user = getUserDataFromCookies();
        if (user) {
            const tokenCreationTime = localStorage.getItem('tokenCreationTime');
            if (tokenCreationTime) {
                const currentTime = new Date().getTime();
                const tokenAge = currentTime - parseInt(tokenCreationTime, 10);
                if (tokenAge < 2 * 3600 * 1000) {
                    console.log('Usuario encontrado y token válido', user);
                    navigate('/contenido');
                } else {
                    console.log('Token expirado');
                }
            } else {
                console.log('No se encontró timestamp del token');
            }
        } 
    }
}, [currentUser, navigate]);

  return (
    <>
      <TopBarLP handleThemeChange={handleThemeChange} isDarkMode={isDarkMode}/>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<Inicio />} />
          <Route path="/contenido" element={<ContenidoProtected />}  />
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

  return currentUser ? <Contenido/> : null;
};

export default LandingPage;

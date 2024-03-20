// En src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Contenido from './Contenido';
import TopBarLP from './TopBarLP';
import { ThemeProvider, Container } from '@mui/material';
import theme from './Theme/theme';
import LandingPage from './LandingPage';



const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage/>
    </ThemeProvider>
  );
};

/**
 *     
 */

export default App;

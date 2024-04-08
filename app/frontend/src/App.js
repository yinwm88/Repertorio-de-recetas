// En src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './Tema/tema';
import LandingPage from './Componentes/LP//LandingPage';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <LandingPage />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};


export default App;

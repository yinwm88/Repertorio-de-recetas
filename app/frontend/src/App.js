// En src/App.js
import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { lightTheme, darkTheme } from './Tema/tema';
import LandingPage from './Componentes/LP/LandingPage';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

// Función para obtener el valor inicial desde localStorage
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('darkMode');
  return savedTheme === 'true';
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Guarda el estado del tema en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      
      <AuthProvider>
        <Router>
          <LandingPage handleThemeChange={handleThemeChange} isDarkMode={isDarkMode}/>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

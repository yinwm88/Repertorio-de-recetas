// En src/App.js
import React from 'react';
import { ThemeProvider} from '@mui/material';
import theme from './Tema/tema';
import LandingPage from './Componentes/LP//LandingPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage/>
    </ThemeProvider>
  );
};


export default App;

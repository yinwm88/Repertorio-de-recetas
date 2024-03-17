// En src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Contenido from './Contenido';
import TopBar from './TopBar';
import { ThemeProvider } from '@mui/material';
import theme from './Theme/theme';
import Ingreso from './Ingreso';


const App = () => {
  return (
     <ThemeProvider theme={theme}>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Contenido />} />
          <Route path="/about" element={<Inicio />} />
        </Routes>
      </Router>
     </ThemeProvider>
  );
};

export default App;

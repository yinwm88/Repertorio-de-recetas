// Inicio.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Inicio() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Bienvenido a Mi Aplicación
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Esta es la página de inicio.
        </Typography>
        <Typography variant="body1">
          Explora la aplicación para descubrir todas sus características.
        </Typography>
      </Box>
    </Container>
  );
}

export default Inicio;

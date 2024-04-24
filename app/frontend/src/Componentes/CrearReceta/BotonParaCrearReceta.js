import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const BotonParaCrearReceta = () => {
  return (
    <Button color="inherit" component={Link} to="/crear-receta">Crear Nueva Receta</Button>
  );
};

export default BotonParaCrearReceta;

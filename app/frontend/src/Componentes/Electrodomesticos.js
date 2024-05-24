import React, { useState, useEffect } from 'react';
import { Grid, Paper, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { useAuth } from '../AuthContext';

const UtensilioCard = styled(Paper)(({ theme, active }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  backgroundColor: active ? theme.palette.success.light : theme.palette.grey[200],
  border: active ? `2px solid ${theme.palette.success.main}` : 'none',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  }
}));

function UtensiliosList() {
  const { currentUser, getToken } = useAuth();
  const [utensilios, setUtensilios] = useState([]);

  useEffect(() => {
    obtenerUtensilios();
  }, []);

  const obtenerUtensilios = async () => {
    try {
      const response = await fetch('http://localhost:3001/usuario/utensilio/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
      });
      const data = await response.json();
      // console.log(`RESPONSE ${getToken()}`)
      console.log('DATA',data.utensilios)
      if (response.ok) {
        setUtensilios(data.utensilios);
      } else {
        throw new Error('Failed to fetch utensilios');
      }
    } catch (error) {
      console.error('Error:');
    }
  };

  const toggleUtensilio = async (utensilio) => {
    const url = `http://localhost:3001/usuario/utensilio/${utensilio.idelectro}/${utensilio.activo ? '' : 'activar'}`;
    try {
      const response = await fetch(url, {
        method: utensilio.activo ? 'DELETE' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({ correo: currentUser }),
      });
      const data = await response.json();
      if (response.ok) {
        obtenerUtensilios();  // Refrescar la lista
      } else {
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Grid container spacing={2}>
      {utensilios.map((utensilio) => (
        <Grid item xs={4} key={utensilio.idelectro} onClick={() => toggleUtensilio(utensilio)}>
          <UtensilioCard active={utensilio.activo}>
            <Typography variant="h6">{utensilio.nombre}</Typography>
            <IconButton color={utensilio.activo ? "success" : "default"}>
              {utensilio.activo ? <ToggleOnIcon /> : <ToggleOffIcon />}
            </IconButton>
          </UtensilioCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default UtensiliosList;

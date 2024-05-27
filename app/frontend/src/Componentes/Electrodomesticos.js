import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Masonry } from '@mui/lab';

import {
  faSnowflake,
  faJar,
  faBlender,
  faMattressPillow,
  faFireBurner,
  faOilCan,
  faDumpster,
  faJugDetergent,
  faBoxTissue,
  faScrewdriver,
  faDumpsterFire,
  faMortarPestle,
  faNeuter,
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../AuthContext';

library.add(
  faSnowflake,
  faJar,
  faBlender,
  faMattressPillow,
  faFireBurner,
  faOilCan,
  faDumpster,
  faJugDetergent,
  faBoxTissue,
  faScrewdriver,
  faDumpsterFire,
  faMortarPestle,
  faNeuter,
);

const UtensilioCard = styled(Paper)(({ theme, active }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  backgroundColor: active ? 'lightgreen' : theme.palette.grey[200],
  border: active ? `2px solid ${theme.palette.success.main}` : 'none',
  color: active ? theme.palette.success.main : theme.palette.text.secondary,
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
      if (response.ok) {
        const utensiliosOrdenados = data.utensilios.sort((a, b) => a.nombre.localeCompare(b.nombre));
        setUtensilios(utensiliosOrdenados);
      } else {
        throw new Error('Failed to fetch utensilios');
      }
    } catch (error) {
      console.error('Error:', error);
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
    <Masonry columns={3} spacing={2}>
      {utensilios.map((utensilio) => (
        <div key={utensilio.idelectro} onClick={() => toggleUtensilio(utensilio)}>
          <UtensilioCard active={utensilio.activo}>
            <Typography variant="h9">{utensilio.nombre}</Typography>
            <FontAwesomeIcon icon={utensilio.icono} size="2x" color={utensilio.activo ? "green" : undefined} />
          </UtensilioCard>
        </div>
      ))}
    </Masonry>
  );
}

export default UtensiliosList;

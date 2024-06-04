import React, { useState, useEffect } from 'react';
import { Paper, List, ListItem, ListItemText, ListItemIcon, Button } from '@mui/material';
import { Box, CssBaseline, Typography, IconButton, Fab, ListItemButton, ListItemAvatar, Avatar, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
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
import AddIcon from '@mui/icons-material/Add';
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

const StyledFab = styled(Fab)({
  position: 'relative',
  zIndex: 1,
  margin: '0 auto',
});

const UtensilioItem = styled(Paper)(({ theme, active }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  backgroundColor: active ? 'lightgreen' : theme.palette.grey[200],
  border: active ? `2px solid ${theme.palette.success.main}` : 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  }
}));

function UtensiliosList({ onUtensiliosSeleccionadosChange }) {
  const { currentUser, getToken } = useAuth();
  const [utensilios, setUtensilios] = useState([]);
  const [activarTodos, setActivarTodos] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUtensilios = async () => {
      const nuevosUtensilios = await obtenerUtensilios();
      setUtensilios(nuevosUtensilios);
      const utensiliosActivos = nuevosUtensilios.filter(u => u.activo);
      onUtensiliosSeleccionadosChange(utensiliosActivos);
    };
    fetchUtensilios();
  }, []);

  useEffect(() => {
    console.log('Utensilios:', utensilios);
  }, [utensilios]);

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
        return data.utensilios.sort((a, b) => a.nombre.localeCompare(b.nombre));
      } else {
        throw new Error('Failed to fetch utensilios');
      }
    } catch (error) {
      console.error('Error:', error);
      return [];
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
        // Actualizar los utensilios y utensilios seleccionados después de la operación
        const nuevosUtensilios = await obtenerUtensilios();
        setUtensilios(nuevosUtensilios);
        const utensiliosActualizados = nuevosUtensilios.filter(u => u.activo);
        onUtensiliosSeleccionadosChange(utensiliosActualizados);
      } else {
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const activarTodosUtensilios = async () => {
    setActivarTodos(true);
    await Promise.all(utensilios.map(async (utensilio) => {
      if (!utensilio.activo) {
        await toggleUtensilio(utensilio);
      }
    }));
    setActivarTodos(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '95%', 
          marginBottom:'10px'
        }}
      >
        <h2>
            Mis utensilios
        </h2>
        <Button variant="contained" onClick={activarTodosUtensilios} disabled={activarTodos}>
          {activarTodos ? 'Activando todos los utensilios...' : 'Activar todos'}
        </Button>
      </Box>

      <List style={{ maxHeight: 'calc(10 * 64px)', overflowY: 'auto' }}>
        {utensilios.map((utensilio, index) => {
          return (
            <ListItem key={utensilio.idelectro} onClick={() => toggleUtensilio(utensilio)}>
              <UtensilioItem active={utensilio.activo}>
                <ListItemIcon>
                  <FontAwesomeIcon icon={utensilio.icono} size="2x" color={utensilio.activo ? "green" : undefined} />
                </ListItemIcon>
                <ListItemText primary={utensilio.nombre} />
              </UtensilioItem>
            </ListItem>
          );
        })}
      </List>



      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <StyledFab color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </StyledFab>
      </Box>




      <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Añadir ingrediente 🍎</DialogTitle>
                  <DialogContent>
                    
                    <DialogContentText>
                      Si no encuentras un ingrediente, puedes crear uno nuevo.
                    </DialogContentText><br />
                    <Button>Crear ingrediente nuevo</Button>
                  </DialogContent>
                  <DialogActions>
                    <Button >Cancelar</Button>
                    <Button >Añadir</Button>
                  </DialogActions>
      </Dialog>

    </>
  );
}

export default UtensiliosList;

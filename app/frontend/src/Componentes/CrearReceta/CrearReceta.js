import React, { useState } from 'react';
import {
  Box, CssBaseline, Typography, IconButton, Paper, Fab, List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Avatar, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '../../AuthContext';
import Swal from 'sweetalert2';
import AddIcon from '@mui/icons-material/Add';

const CrearReceta = ({ isOpen, onClose, triggerUpdate }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    tiempo: '',
    proceso: [],
    ingredientes: [],
  });
  const [nuevoPaso, setNuevoPaso] = useState('');

  const handleAddStep = () => {
    if (nuevoPaso.trim() !== '') {
      setFormData((prevState) => ({
        ...prevState,
        proceso: [...prevState.proceso, nuevoPaso],
      }));
      setNuevoPaso('');
    }
  };

  const handleStepChange = (e) => {
    setNuevoPaso(e.target.value);
  };

  const handleRemoveStep = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      proceso: prevState.proceso.filter((_, i) => i !== index),
    }));
  };

  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { currentUser, getToken } = useAuth();

  const fetchIngredients = async (text) => {
    if (!text.trim()) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/ingrediente/buscar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingrediente: text }),
      });
      const data = await response.json();
      if (response.ok) {
        setSearchResults(data.ingredientes || []);
      } else {
        console.error('Error buscando ingredientes:', data.message);
        setError(data.message || 'Error al buscar ingredientes');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error al conectarse al servidor');
    }
  };

  const handleSubmit = async () => {
    const formBody = new URLSearchParams();
    formBody.append('nombre', formData.nombre);
    formBody.append('tiempo', formData.tiempo);
    formBody.append('proceso', formData.proceso.join('. '));  // Aquí se concatenan los pasos
    formBody.append('utensilios[0][idUtensilio]', '10');

    formData.ingredientes.forEach((ingrediente, index) => {
      formBody.append(`ingredientes[${index}][idIngrediente]`, ingrediente.idingrediente);
      formBody.append(`ingredientes[${index}][cantidad]`, ingrediente.cantidad);
    });

    try {
      const response = await fetch('http://localhost:3001/receta/crearReceta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Authorization': `Bearer ${getToken()}`,
        },
        body: formBody.toString(),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          title: 'Receta creada exitosamente',
          icon: 'success',
        });
        onClose();
        triggerUpdate();
        setFormData({ nombre: '', tiempo: '', proceso: [], ingredientes: [] });
      } else {
        alert(data.message || 'Hubo un problema al crear la receta. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al crear la receta:', error);
      alert('Hubo un error al crear la receta. Por favor, inténtalo nuevamente más tarde.');
    }
  };


  const handleIngredientAdd = (ingrediente) => {
    setFormData((prevState) => ({
      ...prevState,
      ingredientes: [...prevState.ingredientes, { ...ingrediente, cantidad: 1 }],
    }));
    setSearchResults([]);
    setSearchText('');
  };

  const handleIngredientRemove = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      ingredientes: prevState.ingredientes.filter((_, i) => i !== index),
    }));
  };

  const handleIngredientChange = (index, cantidad) => {
    setFormData((prevState) => {
      const updatedIngredientes = [...prevState.ingredientes];
      updatedIngredientes[index].cantidad = cantidad;
      return { ...prevState, ingredientes: updatedIngredientes };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Crear Nueva Receta</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1000px',
            mx: 'auto',
          }}
        >
          <TextField
            id="nombre"
            name="nombre"
            label="Nombre de la receta"
            variant="outlined"
            value={formData.nombre}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            id="tiempo"
            name="tiempo"
            label="Tiempo (minutos)"
            type="number"
            variant="outlined"
            value={formData.tiempo}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <TextField
              id="nuevoPaso"
              label="Agregar paso"
              variant="outlined"
              value={nuevoPaso}
              onChange={handleStepChange}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddStep();
                }
              }}
              fullWidth
              sx={{ flexGrow: 1 }}
            />
            <IconButton onClick={handleAddStep} color="primary" sx={{ ml: 2, flexShrink: 0 }}>
              <AddIcon />
            </IconButton>
          </Box>
          <List>
            {formData.proceso && Array.isArray(formData.proceso) && formData.proceso.map((paso, index) => (
              <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <ListItemText primary={`Paso ${index + 1}: ${paso}`} />
                <IconButton onClick={() => handleRemoveStep(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>



          <TextField
            id="searchIngredient"
            label="Buscar ingrediente"
            type="text"
            fullWidth
            variant="outlined"
            value={searchText}
            onChange={(e) => {
              const text = e.target.value;
              setSearchText(text);
              fetchIngredients(text);
            }}
            margin="normal"
          />
          <List>
            {searchResults && Array.isArray(searchResults) && searchResults.map((ingrediente) => (
              <ListItem key={ingrediente.idingrediente} button onClick={() => handleIngredientAdd(ingrediente)}>
                <ListItemText primary={`${ingrediente.nombre} (${ingrediente.unidad})`} />
              </ListItem>
            ))}
          </List>
          <List>
            {formData.ingredientes && Array.isArray(formData.ingredientes) && formData.ingredientes.map((ing, index) => (
              <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <ListItemText primary={`${ing.nombre} (${ing.cantidad} ${ing.unidad})`} />
                <TextField
                  type="number"
                  value={ing.cantidad}
                  onChange={(e) => handleIngredientChange(index, Number(e.target.value))}
                  sx={{ width: '70px', mr: 2 }}
                />
                <IconButton onClick={() => handleIngredientRemove(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          {error && <Typography color="error">{error}</Typography>}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancelar</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary" disabled={!formData.nombre || !formData.tiempo || !formData.proceso || formData.ingredientes.length === 0}>
          Crear Receta
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CrearReceta;

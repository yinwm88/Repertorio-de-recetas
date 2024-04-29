import React, { useState } from 'react';
import { Box, CssBaseline, Typography, IconButton, Paper, Fab, List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Avatar, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '../../AuthContext';
import AnimatedTypingText from './AnimatedTypingText';

const CrearReceta = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    tiempo: '',
    proceso: '',
    ingredientes: ''
  });
  const [error, setError] = useState(null);

  const [nombre, setNombre] = useState('');
  const [tiempo, setTiempo] = useState('');
  const [proceso, setProceso] = useState('');
  const [ingredientes, setIngredientes] = useState('');

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const { currentUser } = useAuth();
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
        if (Array.isArray(data.ingredientes)) {
          setSearchResults(data.ingredientes);
        } else {
          setSearchResults([]);
        }
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
    const formBody = [];

    // Añadir campos del formulario a formBody.
    formBody.push(`nombre=${encodeURIComponent(nombre)}`);
    formBody.push(`tiempo=${encodeURIComponent(tiempo)}`);
    formBody.push(`proceso=${encodeURIComponent(proceso)}`);

    // Añadir ingredientes a formBody.
    selectedIngredients.forEach((ingrediente, index) => {
      formBody.push(`ingredientes[${index}][idIngrediente]=${encodeURIComponent(ingrediente.idingrediente)}`);
      formBody.push(`ingredientes[${index}][cantidad]=${encodeURIComponent(ingrediente.cantidad)}`);
    });

    // Añadir correo del usuario a formBody.
    formBody.push(`usuario[correo]=${encodeURIComponent(currentUser || '')}`);

    try {
      const response = await fetch('http://localhost:3001/receta/crearReceta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody.join("&"),
      });

      let data;
      try {
        data = await response.json();
      } catch (error) {
        // Si la respuesta no es JSON, manejar el error o establecer un mensaje predeterminado
        console.error('No se recibió un JSON válido:', error);
      }

      if (response.ok) {
        // Si el código de estado indica éxito
        alert(data.message || '¡Tu receta ahora forma parte de la comunidad!');
        // Aquí podrías redireccionar al usuario o resetear los estados del formulario
        setNombre('');
        setTiempo('');
        setProceso('');
        setSelectedIngredients([]);
        console.log('Datos de receta agregada', data)
      } else {
        // Si el servidor respondió con un error
        alert(data.message || 'Hubo un problema al crear la receta. Por favor, intenta nuevamente.');
      }

    }

    catch (error) {
      console.error('Error al crear la receta:\n', error);
      alert('Hubo un error al crear la receta. Por favor, inténtalo nuevamente más tarde.');
    }
  };


  return (
    <div> 
        <div style={{marginTop:'20px'}}>
          <AnimatedTypingText text="  Tus habilidades culinarias podrán inspirar a muchos otros."/>
        </div>           
         <div style={{
            backgroundColor: '#FADCD9',
            padding: '20px',
            borderRadius: '10px',
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1000px', 
            marginLeft: 'auto',
            marginRight: 'auto', 
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <TextField
                id="nombre"
                name="nombre"
                label="Nombre de la receta"
                variant="outlined"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                fullWidth
                margin="normal"
                sx={{ flex: '3', marginRight: '10px' }} 
              />
              <TextField
                id="tiempo"
                name="tiempo"
                label="Tiempo(minutos)"
                type="number"
                variant="outlined"
                value={tiempo}
                onChange={(e) => setTiempo(e.target.value)}
                required
                fullWidth
                margin="normal"
                sx={{ flex: '0.7' }}
              />
            </div>


            <TextField
              id="proceso"
              name="proceso"
              label="Proceso de preparación"
              multiline
              rows={4}
              variant="outlined"
              value={proceso}
              onChange={(e) => setProceso(e.target.value)}
              required
              fullWidth
              margin="normal"
            />
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
              {searchResults.map((ingrediente) => (
                <ListItem
                  key={ingrediente.idingrediente}
                  button
                  onClick={() => {
                    setSelectedIngredients([...selectedIngredients, { ...ingrediente, cantidad: 1, unidad: ingrediente.unidad }]);
                    setSearchResults([]);
                    setSearchText('');
                  }}
                >
                  <ListItemText primary={`${ingrediente.nombre} (${ingrediente.unidad})`} />
                </ListItem>
              ))}
            </List>

            <List>
              {selectedIngredients.map((ing, index) => (
                <ListItem key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <ListItemText primary={`${ing.nombre} (${ing.cantidad} ${ing.unidad})`} />
                  <TextField
                    type="number"
                    value={ing.cantidad}
                    onChange={(e) => {
                      const newSelectedIngredients = [...selectedIngredients];
                      newSelectedIngredients[index].cantidad = Number(e.target.value);
                      setSelectedIngredients(newSelectedIngredients);
                    }}
                  />
                  <IconButton onClick={() => {
                    const newSelectedIngredients = selectedIngredients.filter((_, i) => i !== index);
                    setSelectedIngredients(newSelectedIngredients);
                  }}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </div>

          <div style={{  padding: '20px', marginTop: '15px', marginLeft: '1100px' }}>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                  Crear Receta
                </Button>
          </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CrearReceta;

import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';

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


  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/receta/crearReceta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre,
          tiempo,
          proceso,
          ingredientes,
        }),
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        alert('¡Tu receta ahora forma parte de la comunidad!');
      } else {
        alert(data.message || 'Hubo un problema al crear la receta. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error al crear la receta:\n', error.message);
      alert('Hubo un error al crear la receta. Por favor, inténtalo nuevamente más tarde.');
    }
    setNombre('');
    setTiempo('');
    setProceso('');
    setIngredientes('');
  };

  return (
    <div style={{ backgroundColor: '#FADCD9', padding: '20px', borderRadius: '10px', marginTop:'130px' }}>
      <Typography variant="h6">
          Seguro tus habilidades culinarias podran inspirar a muchos otros.
      </Typography>
      <div>
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
        />
        <TextField
          id="tiempo"
          name="tiempo"
          label="Tiempo de preparación (minutos)"
          type="number"
          variant="outlined"
          value={tiempo}
          onChange={(e) => setTiempo(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
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
          id="ingredientes"
          name="ingredientes"
          label="Ingredientes"
          multiline
          rows={4}
          variant="outlined"
          value={ingredientes}
          onChange={(e) => setIngredientes(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Crear Receta
        </Button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CrearReceta;

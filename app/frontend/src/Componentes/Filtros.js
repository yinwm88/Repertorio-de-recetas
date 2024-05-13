import React, { useState, useEffect } from 'react';
import { Box, TextField, Chip, Slider, Typography, Stack, Button, Collapse } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

function FiltroRecetas({ onSearchChange, onTimeChange, recipes, onTipoChange }) {
  const [busqueda, setBusqueda] = useState('');
  const [tiposCocina, setTiposCocina] = useState([]);
  const [tiposSeleccionados, setTiposSeleccionados] = useState([]);
  const [rangoTiempo, setRangoTiempo] = useState([0, 250]); // Por ejemplo, 0 a 120 minutos
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  function completarAcentos(nombre) {
    const acentosIncompletos = {
      "Espa_ola": "Española",
      "Mediterr_nea": "Mediterránea",
      "rabe": "Árabe",
      "R_pida": "Rápida"
    };

    if (acentosIncompletos[nombre]) {
      return acentosIncompletos[nombre];
    }

    return nombre;
  }


  // Extraer tipos de cocina de las recetas
  useEffect(() => {
    const tiposUnicos = new Set();
    if (!recipes) return;
    recipes.forEach(receta => {
      if (receta.tipos && receta.tipos.length > 0) {
        receta.tipos.forEach(tipo => tiposUnicos.add(completarAcentos(tipo.tipo)));
      }
    });
    setTiposCocina([...tiposUnicos]);
  }, [recipes]);

  const handleTipoClick = (tipo) => {
    const currentIndex = tiposSeleccionados.indexOf(tipo);
    const newChecked = [...tiposSeleccionados];

    if (currentIndex === -1) {
      newChecked.push(tipo);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setTiposSeleccionados(newChecked);
    onTipoChange(newChecked);  // Notificar al componente padre
  };


  const handleTiempoChange = (event, newValue) => {
    setRangoTiempo(newValue);
    onTimeChange(newValue);
  };

  const toggleFiltros = () => {
    setMostrarFiltros(!mostrarFiltros);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Buscar recetas"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
          value={busqueda}
          onChange={(e) => {
            setBusqueda(e.target.value);
            onSearchChange(e.target.value);
          }}
        />
        <Button variant="outlined" onClick={toggleFiltros} startIcon={<FilterListIcon />}>
          Filtros
        </Button>
      </Stack>
      <Collapse in={mostrarFiltros}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Tipo de cocina</Typography>
          {tiposCocina.length > 0 ? (
            <Stack direction="row" spacing={1} style={{ overflowX: 'auto', flexWrap: 'wrap' }}>
              {tiposCocina.map((tipo) => (
                <Chip
                  key={tipo}
                  label={tipo}
                  onClick={() => handleTipoClick(tipo)}
                  color={tiposSeleccionados.includes(tipo) ? 'primary' : 'default'}
                  style={{ "margin-top": 10 }}
                />
              ))}
            </Stack>
          ) : (
            <Typography color="text.secondary">No hay tipos de cocina disponibles.</Typography>
          )}
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Rango de tiempo (minutos)</Typography>
          <Slider
            value={rangoTiempo}
            onChange={handleTiempoChange}
            valueLabelDisplay="auto"
            min={0}
            max={120}
          />
        </Box>
      </Collapse>
    </Box>
  );
}

export default FiltroRecetas;

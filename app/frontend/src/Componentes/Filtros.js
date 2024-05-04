import React, { useState } from 'react';
import { Box, TextField, Chip, Slider, Typography, Stack, Button, Collapse } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const tags = ['Mexicana', 'Italiana', 'Vegana', 'Sin gluten'];
const dietas = ['Vegetariano', 'Keto', 'Paleo', 'Vegano'];

function FiltroRecetas({ onSearchChange, onTimeChange }) {
  const [busqueda, setBusqueda] = useState('');
  const [tagsSeleccionados, setTagsSeleccionados] = useState([]);
  const [dietaSeleccionada, setDietaSeleccionada] = useState('');
  const [rangoTiempo, setRangoTiempo] = useState([0, 120]); // Por ejemplo, 0 a 120 minutos
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

  

  const handleTagClick = (tag) => {
    const currentIndex = tagsSeleccionados.indexOf(tag);
    const newChecked = [...tagsSeleccionados];

    if (currentIndex === -1) {
      newChecked.push(tag);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setTagsSeleccionados(newChecked);
  };

  const handleDietaClick = (dieta) => {
    setDietaSeleccionada(dietaSeleccionada === dieta ? '' : dieta);
  };

  const handleTiempoChange = (event, newValue) => {
    setRangoTiempo(newValue);
    onTimeChange(newValue);
  };

  const toggleFiltros = () => {
    setMostrarFiltros(!mostrarFiltros);
  };

  return (
    <Box sx={{ p: 2,marginTop:3 }}>
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
          <Typography variant="h6">Cocina</Typography>
          <Stack direction="row" spacing={1}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                onClick={() => handleTagClick(tag)}
                color={tagsSeleccionados.includes(tag) ? 'primary' : 'default'}
              />
            ))}
          </Stack>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Tipo de dieta</Typography>
          <Stack direction="row" spacing={1}>
            {dietas.map((dieta) => (
              <Chip
                key={dieta}
                label={dieta}
                onClick={() => handleDietaClick(dieta)}
                color={dietaSeleccionada === dieta ? 'primary' : 'default'}
              />
            ))}
          </Stack>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Rango de tiempo (minutos)</Typography>
          <Slider
            value={rangoTiempo}
            onChange={handleTiempoChange}
            valueLabelDisplay="auto"
            min={0}
            max={120} // Ajusta el máximo según las recetas
          />
        </Box>
      </Collapse>
    </Box>
  );
}

export default FiltroRecetas;

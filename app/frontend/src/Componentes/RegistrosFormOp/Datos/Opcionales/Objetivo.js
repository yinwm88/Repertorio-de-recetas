import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

const objetivoOptions = [
  { value: 'bajar_peso', label: 'Bajar de peso' },
  { value: 'ganar_peso', label: 'Ganar peso' },
  { value: 'controlar_dieta', label: 'Controlar dieta' },
];

const Objetivo = ({ value1, value2,  handleChange }) => (
  <FormControl component="fieldset" fullWidth required variant="outlined">
    <Typography marginTop={"15px"}>¿Quiere seguir algun objetivo?</Typography>
    <RadioGroup
      aria-label="tiene-objetivo"
      name="Tiene_Objetivo"
      value={value1}
      onChange={handleChange}
      row
    >
      <FormControlLabel value="si" control={<Radio />} label="Sí" />
      <FormControlLabel value="no" control={<Radio />} label="No" />
    </RadioGroup>

    {value1 === 'si' && (
      <FormControl fullWidth required variant="outlined" style={{ marginTop: '20px' }}>
        <InputLabel id="objetivo-label">Seleccione un objetivo:</InputLabel>
        <Select
          labelId="objetivo-label"
          name="Objetivo"
          value={value2}
          onChange={handleChange}
        >
          {objetivoOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )}
  </FormControl>
);

export default Objetivo;

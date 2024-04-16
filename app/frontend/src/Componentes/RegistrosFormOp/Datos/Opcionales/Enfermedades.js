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

const enfermedadesOptions = [
    { value: 'hipertension', label: 'Hipertensión' },
    { value: 'diabetes', label: 'Diabetes' },
    { value: 'obesidad', label: 'Obesidad' },
];

const Enfermedades = ({ value1, value2,  handleChange }) => (
  
  <FormControl component="fieldset" fullWidth required variant="outlined">
    <Typography marginTop={"15px"}>¿Padece alguna enfermedad?</Typography>
    <RadioGroup
      aria-label="tiene-enfermedad"
      name="Tiene_Enfermedad"
      value={value1}
      onChange={handleChange}
      row
    >
      <FormControlLabel value="si" control={<Radio />} label="Sí" />
      <FormControlLabel value="no" control={<Radio />} label="No" />
    </RadioGroup>

    {value1 === 'si' && (
      <FormControl fullWidth required variant="outlined" style={{ marginTop: '20px' }}>
        <InputLabel id="enfermedades-label">Seleccione la(s) enfermedad(es)</InputLabel>
        <Select
          labelId="enfermedades-label"
          name="Enfermedades"
          multiple
          value={value2}
          onChange={handleChange}
        >
          {enfermedadesOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )}
  </FormControl>
);

export default Enfermedades;

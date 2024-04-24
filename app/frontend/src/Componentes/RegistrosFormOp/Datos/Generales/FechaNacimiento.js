import React from 'react';
import TextField from '@mui/material/TextField';

const FechaNacimiento = ({ value, handleChange }) => {
  return (
    <TextField
      label="Fecha de nacimiento"
      type="date"
      name="Fecha_de_nacimiento"
      value={value}
      onChange={handleChange}
      inputProps={{
        max: new Date().toISOString().split('T')[0],
        pattern: '\\d{4}-\\d{2}-\\d{2}',
      }}
      InputLabelProps={{ shrink: true }}
      required
      fullWidth
    />
  );
};

export default FechaNacimiento;

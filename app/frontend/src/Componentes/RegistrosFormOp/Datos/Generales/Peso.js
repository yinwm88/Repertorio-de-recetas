import React from 'react';
import { TextField, Typography } from '@mui/material';
import { styled } from '@mui/system'; // Asegúrate de importar styled de @mui/system

const Peso = ({ value, handleChange }) => {
    const FormInput = styled(TextField)(({ theme }) => ({
        margin: theme.spacing(1, 0),
    }));
  
    return (
    <FormInput
      label="Peso"
      name="Peso"
      type="text"
      value={value}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      InputProps={{
        endAdornment: <Typography variant="subtitle2">kg</Typography>,
      }}
      onKeyDown={(e) => {
        if (!(e.key === 'Backspace') && isNaN(Number(e.key))) {
          e.preventDefault();
        }
      }}
    />
  );
};

export default Peso; 

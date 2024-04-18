import React from 'react';
import { styled , TextField, Typography } from '@mui/material';

const Talla = ({ value, handleChange }) => {
 
    const FormInput = styled(TextField)(({ theme }) => ({
        margin: theme.spacing(1, 0),
    }));
      
    return (
    <FormInput
        label="Talla"
        name="Talla"
        type="text"
        value={value}
        onChange={handleChange}
        variant="outlined"
        InputProps={{
        endAdornment: <Typography variant="subtitle2">m.cm</Typography>,
        }}
        required
        onKeyDown={(e) => {
            // Permitir retroceso, punto decimal y números
            if (
                !(e.key === 'Backspace') && 
                !(e.key === '.') && 
                !(e.key >= '0' && e.key <= '9') && 
                !(e.key >= '0' && e.key <= '9' && e.target.value.includes('.'))
            ) {
                e.preventDefault();
            }
        }}
  />
  );
};

export default Talla;

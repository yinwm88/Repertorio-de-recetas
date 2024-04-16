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
        if (!(e.key === 'Backspace') && !(e.key === '.') && isNaN(Number(e.key))) {
            e.preventDefault();
        }
        }}
  />
  );
};

export default Talla;

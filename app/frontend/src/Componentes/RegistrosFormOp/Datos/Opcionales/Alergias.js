import React from 'react';
import {FormControl,Typography,RadioGroup,FormControlLabel,Radio,TextField, Checkbox} from '@mui/material';




const Alergias= ({ value1, value2, value3, handleChange, handleSearchInputChange,filteredIngredientes, handleCheckboxChange}) => (
  <FormControl component="fieldset" fullWidth required variant="outlined">
    <Typography marginTop={"15px"}>¿Tienes  alergia a algún ingrediente?</Typography>
    <RadioGroup
      aria-label="tiene-alergia"
      name="Tiene_Alergia"
      value={value1}
      onChange={handleChange}
      row
    >
      <FormControlLabel value="si" control={<Radio />} label="Sí" />
      <FormControlLabel value="no" control={<Radio />} label="No" />
    </RadioGroup>

    {value1 === 'si' && (//formData.Tiene_Alergia
       <div>
       <TextField
         label="Buscar ingredientes"
         value={value2}//formData.searchText
         onChange={handleSearchInputChange}
         fullWidth
       />
       <Typography>Seleccione los ingredientes a los que es alérgico:</Typography>
       {filteredIngredientes.map((ingrediente) => (
         <FormControlLabel
           key={ingrediente}
           control={<Checkbox 
             checked={value3.includes(ingrediente)}//formData.Ingredientes_Alergia
             onChange={handleCheckboxChange} 
             value={ingrediente} 
           />}
           label={ingrediente}
         />
       ))}
     </div>
    )}
  </FormControl>
);

export default Alergias;

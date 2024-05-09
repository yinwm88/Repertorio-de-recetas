import React from 'react';
import {FormControl,Typography,RadioGroup,FormControlLabel,Radio,TextField, Checkbox, List, ListItem, IconButton, ListItemText} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Alergias= ({value1,handleAlergiaChange,searchText, setSearchText, fetchIngredients, setSelectedIngredients, setSearchResults, searchResults, selectedIngredients}) => (
  <FormControl component="fieldset" fullWidth required variant="outlined">
    <RadioGroup
      aria-label="tiene-alergia"
      name="Tiene_Alergia"
      value={value1}
      onChange={handleAlergiaChange}
      row
    >
      <FormControlLabel value="si" control={<Radio />} label="Sí" />
      <FormControlLabel value="no" control={<Radio />} label="No" />
    </RadioGroup>

    {value1 === 'si' && (//formData.Tiene_Alergia
      <div>
        <TextField
          id="searchIngredient"
          label="Buscar ingrediente"
          type="text"
          fullWidth
          variant="outlined"
          value={searchText}
          onChange={(e) => {
            const text = e.target.value;
            setSearchText(text);
            fetchIngredients(text);
          }}
          margin="normal"
        />

        <List>
          {searchResults.map((ingrediente) => (
            <ListItem
              key={ingrediente.idingrediente}
              button
              onClick={() => {
                setSelectedIngredients([...selectedIngredients, { ...ingrediente}]);
                setSearchResults([]);
                setSearchText('');
              }}
            >
              <ListItemText primary={`${ingrediente.nombre} `} />
            </ListItem>
          ))}
        </List>

        <List>
          {selectedIngredients.map((ing, index) => (
            <ListItem key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <ListItemText primary={`${ing.nombre}`} />
              <TextField
                type="number"
                value={ing.cantidad}
                onChange={(e) => {
                  const newSelectedIngredients = [...selectedIngredients];
                  setSelectedIngredients(newSelectedIngredients);
                }}
              />
              <IconButton onClick={() => {
                const newSelectedIngredients = selectedIngredients.filter((_, i) => i !== index);
                setSelectedIngredients(newSelectedIngredients);
              }}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
    </div>
    )}
  </FormControl>
);

export default Alergias;

import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { debounce } from 'lodash';
import { Box, CssBaseline, Typography, IconButton, Paper, Fab, List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Avatar, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BookIcon from '@mui/icons-material/Book';
import SearchIcon from '@mui/icons-material/Search';
import './IngredientesBar.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from '../AuthContext';

const itemIcons = {
  shopping: <ShoppingCartIcon />,
  food: <FastfoodIcon />,
  book: <BookIcon />,
};

const StyledFab = styled(Fab)({
  position: 'relative',
  zIndex: 1,
  top: 20,
  left: 0,
  right: 0,
  margin: '0 auto',
});

function CustomList({lastUpdate, setLastUpdate}) {

  const { currentUser } = useAuth();
  console.log('Usuario actual:', currentUser)

  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Tomates',
      quantity: 3,
      icon: 'shopping',
    },
    {
      id: 2,
      name: 'Cebolla',
      quantity: 1,
      icon: 'food',
    },
    // Considera agregar más ítems para probar el desplazamiento
  ]);

  const [open, setOpen] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState(1);
  const [newItemIcon, setNewItemIcon] = useState('shopping');
  const [searchText, setSearchText] = useState('');

  const [ingredientesUsuario, setIngredientesUsuario] = useState([]);

  const fetchIngredientesUsuario = async () => {
    // Asegúrate de reemplazar currentUser con el correo real del usuario

    try {
      const response = await fetch('http://localhost:3001/ingredientesUsuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo: currentUser }),
      });

      if (!response.ok) {
        throw new Error('No se pudo cargar los ingredientes del usuario');
      }

      const data = await response.json();
      setIngredientesUsuario(data.ingredientes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {


    fetchIngredientesUsuario();
  }, [lastUpdate]); // Dependencia en lastUpdate para recargar la lista cada vez que se añade un nuevo ingrediente


  const [newItemUnit, setNewItemUnit] = useState('');
  const [searchIngredient, setSearchIngredient] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  const fetchIngredients = debounce(async (searchText) => {
    if (!searchText) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/Ingrediente/buscar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingrediente: searchText }),
      });

      const data = await response.json();
      if (response.ok) {
        setSearchResults(Array.isArray(data.ingredientes) ? data.ingredientes : []);
      } else {
        console.error('Error buscando ingredientes');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }, 300);

  const handleSelectIngredient = async (ingrediente) => {
    // Aquí podrías mostrar un diálogo para confirmar y seleccionar la unidad
    // Para este ejemplo, simplemente haré la solicitud directamente

    try {
      const response = await fetch('http://localhost:3000/ingrediente/agregar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idIngrediente: ingrediente.idingrediente,
          unidad: 'g', // Asumiendo una unidad fija por simplicidad
          usuario: { correo: "pepe27@ciencias.mx" } // Asumiendo un usuario fijo por simplicidad
        }),
      });

      if (response.ok) {
        // alert('Ingrediente agregado exitosamente');
        // Realiza cualquier otra acción necesaria después de la adición
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Error al agregar ingrediente');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al conectar con el servidor.');
    }
  };

  useEffect(() => {
    fetchIngredients(searchText);
  }, [searchText]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddItem = () => {
    const newItem = {
      id: items.length + 1,
      name: newItemName,
      quantity: newItemQuantity,
      icon: newItemIcon,
    };
    setItems([...items, newItem]);
    handleClose();
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const selectIngredient = (ingrediente) => {
    setSelectedIngredient(ingrediente);
    setSearchResults([]);
    setSearchIngredient(ingrediente.nombre);
    setNewItemUnit(ingrediente.unidad);
  };


  const listContainerStyle = {
    maxHeight: '400px',
    overflowY: 'auto'
  };

  const handleAddItemToStaticList = async () => {
    if (!selectedIngredient) return;

    try {
      const response = await fetch('http://localhost:3001/ingrediente/agregar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idIngrediente: selectedIngredient.idingrediente,
          cantidad: newItemQuantity,
          unidad: newItemUnit,
          usuario: { correo: currentUser }
        }),
      });

      if (!response.ok) throw new Error('No se pudo agregar el ingrediente');

      alert('Ingrediente agregado exitosamente');
      setLastUpdate(Date.now());
      handleClose();
    } catch (error) {
      console.error('Error:', error);
      alert('Error al agregar ingrediente');
    }
  };

  const handleDelete = async (selectedIngredient) => {
    try {
      const response = await fetch(`http://localhost:3001/ingrediente/eliminar/${selectedIngredient.idingrediente}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idIngrediente: selectedIngredient.idingrediente,
          unidad: selectedIngredient.unidad,

          usuario: { correo: currentUser },

        }),
      });

      if (!response.ok) {
        throw new Error('No se pudo eliminar el ingrediente');
      }

      // Recargar la lista de ingredientes del usuario tras la eliminación exitosa
      setLastUpdate(Date.now());
      fetchIngredientesUsuario();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ p: 2, minHeight: '40vh', display: 'flex', flexDirection: 'column', marginTop: '40px' }}>
        <Typography variant="h5" gutterBottom component="div">
          Ingredientes
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Buscar ítem..."
            fullWidth
            margin="normal"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
        <Box sx={listContainerStyle}>
          <List>
            {ingredientesUsuario.map((ingrediente) => (
              <ListItem
                key={ingrediente.idingrediente}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(ingrediente)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <FastfoodIcon>{/* Icono del ingrediente */}</FastfoodIcon>
                </ListItemAvatar>
                <ListItemText
                  primary={ingrediente.nombre}
                  secondary={`Cantidad: ${ingrediente.cantidad} ${ingrediente.unidad}`}
                />
              </ListItem>
            ))}
          </List>

        </Box>



        <StyledFab color="primary" aria-label="add" onClick={handleClickOpen} style={{ margin: 15 }}>
          <AddIcon />
        </StyledFab>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Añadir ingrediente 🍎</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Busca y selecciona un ingrediente.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="searchIngredient"
              label="Buscar ingrediente"
              type="text"
              fullWidth
              variant="standard"
              value={searchIngredient}
              onChange={(e) => {
                setSearchIngredient(e.target.value);
                fetchIngredients(e.target.value); // Asumiendo que esta función ya existe y se ha adaptado para actualizar setSearchResults
              }}
            />
            {/* Muestra los resultados de la búsqueda aquí */}
            <List sx={{ width: '100%', bgcolor: 'background.paper', maxHeight: 200, overflow: 'auto', mt: 2 }}>



              {searchResults.map((ingrediente) => (
                <ListItem
                  key={ingrediente.idingrediente}
                  button
                  onClick={() => selectIngredient(ingrediente)}
                  sx={{ '&:hover': { bgcolor: 'action.hover' } }}
                >
                  <ListItemText primary={`${ingrediente.nombre} (${ingrediente.unidad})`} />
                </ListItem>
              ))}

            </List>
            {/* Los siguientes campos aparecerán después de seleccionar un ingrediente */}
            {selectedIngredient && (
              <>
                <TextField
                  margin="dense"
                  id="quantity"
                  label="Cantidad"
                  type="number"
                  fullWidth
                  variant="standard"
                  value={newItemQuantity}
                  onChange={(e) => setNewItemQuantity(Number(e.target.value))}
                />
                <TextField
                  margin="dense"
                  id="unit"
                  label="Unidad de medida"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={newItemUnit}
                  onChange={(e) => setNewItemUnit(e.target.value)}
                  disabled={true}
                />
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleAddItemToStaticList}>Añadir</Button>
          </DialogActions>
        </Dialog>

      </Paper>
    </React.Fragment>
  );
}

export default CustomList;

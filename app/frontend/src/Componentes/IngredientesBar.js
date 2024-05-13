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
import Swal from 'sweetalert2'
import Slider from '@mui/material/Slider';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Chip from '@mui/material/Chip';
import KitchenIcon from '@mui/icons-material/Kitchen'; // Icono para utensilios
import { Tab, Tabs } from '@mui/material';
import UtensiliosList from './Electrodomesticos';


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

function CustomList({ lastUpdate, setLastUpdate }) {



  const { currentUser } = useAuth();
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };


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


  //Edicion
  const [editingIngredient, setEditingIngredient] = useState(null);
  const [editingQuantity, setEditingQuantity] = useState(0);

  const startEditing = (ingrediente) => {
    setEditingIngredient(ingrediente);
    setEditingQuantity(ingrediente.cantidad);
  };
  const confirmDelete = async (ingrediente) => {
    try {
      const response = await fetch(`http://localhost:3001/ingrediente/eliminar/${ingrediente.idingrediente}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idIngrediente: ingrediente.idingrediente,
          cantidad: parseInt(editingQuantity),
          unidad: ingrediente.unidad,
          usuario: { correo: currentUser },
        }),
      });

      if (!response.ok) {
        throw new Error('No se pudo eliminar el ingrediente');
      }

      setEditingIngredient(null); // Resetear el ingrediente en edición
      setLastUpdate(Date.now());
      fetchIngredientesUsuario();
    } catch (error) {
      console.error(error);
    }
  };




  //Ingredientes Usuario
  const [ingredientesUsuario, setIngredientesUsuario] = useState([]);
  const fetchIngredientesUsuario = async () => {
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
      const response = await fetch('http://localhost:3001/ingrediente/buscar', {
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

  const secondaryActionStyles = {
    editing: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
    },
    sliderContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '160%',
      paddingLeft: '8px',
      paddingRight: '80px',

    }
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
      Swal.fire({
        text: 'Ingrediente agregado exitosamente!',
        icon: 'success',
      });

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
      <React.Fragment>
        <CssBaseline />
        <Paper square sx={{ p: 2, display: 'flex', flexDirection: 'column', marginTop: '40px' }}>
          <Tabs value={tabIndex} onChange={handleTabChange} centered>
            <Tab label="Ingredientes" />
            <Tab label="Utensilios" />
          </Tabs>

          {tabIndex === 0 && (
            <Box sx={{ p: 2 }}>
              <React.Fragment >
                <h2>
                  Mis ingredientes
                </h2>

                <Box sx={listContainerStyle}>
                  <List>
                    {ingredientesUsuario.map((ingrediente) => (
                      <ListItem
                        key={ingrediente.idingrediente}
                        style={{ overflow: 'hidden' }}
                        secondaryAction={
                          editingIngredient?.idingrediente === ingrediente.idingrediente ? (
                            <Box sx={secondaryActionStyles.editing}>
                              <Box sx={secondaryActionStyles.sliderContainer}>
                                <Chip
                                  label={editingQuantity}
                                  color="primary"
                                  variant="outlined"
                                  size="small"
                                  sx={{ mx: 1 }}
                                />
                                <Slider
                                  value={editingQuantity}
                                  onChange={(e, newValue) => setEditingQuantity(newValue)}
                                  aria-labelledby="input-slider"
                                  min={0}
                                  max={ingrediente.cantidad}
                                  sx={{ width: '150%' }}  // Ocupa todo el ancho
                                />
                              </Box>
                              <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <IconButton onClick={() => confirmDelete(editingIngredient)} aria-label="confirm">
                                  <CheckIcon />
                                </IconButton>
                                <IconButton onClick={() => setEditingIngredient(null)} aria-label="cancel">
                                  <CloseIcon />
                                </IconButton>
                              </Box>
                            </Box>
                          ) : (
                            <Box sx={secondaryActionStyles.normal}>
                              <IconButton edge="end" aria-label="edit" onClick={() => startEditing(ingrediente)}>
                                <DeleteIcon />
                              </IconButton>
                            </Box>
                          )
                        }
                      >
                        <ListItemAvatar>
                          <FastfoodIcon />
                        </ListItemAvatar>
                        <ListItemText
                          primary={ingrediente.nombre}
                          secondary={`Cantidad: ${ingrediente.cantidad} ${ingrediente.unidad}`}
                        />
                      </ListItem>

                    ))}
                  </List>

                </Box>



                <StyledFab color="primary" aria-label="add" onClick={handleClickOpen} style={{ top: 40 }}>
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

              </React.Fragment>
            </Box>
          )}

          {tabIndex === 1 && (
            <Box sx={{ p: 2 }}>
              <h2>
                Mis utensilios
              </h2>
              <UtensiliosList/>
            </Box>
          )}
        </Paper>
      </React.Fragment>



    </React.Fragment>
  );
}

export default CustomList;

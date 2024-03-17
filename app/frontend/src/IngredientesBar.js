import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, Typography, IconButton, Paper, Fab, List, ListItemButton, ListItemAvatar, ListItemText, Avatar, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BookIcon from '@mui/icons-material/Book';
import SearchIcon from '@mui/icons-material/Search';

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

function CustomList() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Tomates',
      quantity: 3,
      icon: 'shopping',
    },
    {
      id: 2,
      name: 'Hamburguesa',
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

  // Estilo para el contenedor de la lista
  const listContainerStyle = {
    maxHeight: '400px', // Ajusta esta altura según tus necesidades
    overflowY: 'auto'
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ p: 2, minHeight: '40vh', display: 'flex', flexDirection: 'column' }}>
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
          <List sx={{ width: '100%' }}>
            {filteredItems.map(({ id, name, quantity, icon }) => (
              <ListItemButton key={id}>
                <ListItemAvatar>
                  <Avatar>{itemIcons[icon]}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} secondary={`Cantidad: ${quantity}`} />
              </ListItemButton>
            ))}
          </List>
        </Box>
        <StyledFab color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </StyledFab>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Añadir nuevo ítem</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Ingresa los detalles del nuevo ítem.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre del ítem"
              type="text"
              fullWidth
              variant="standard"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
            />
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
              id="icon"
              label="Icono (shopping, food, book)"
              type="text"
              fullWidth
              variant="standard"
              value={newItemIcon}
              onChange={(e) => setNewItemIcon(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleAddItem}>Añadir</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </React.Fragment>
  );
}

export default CustomList;

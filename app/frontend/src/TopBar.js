import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle'; // Importa el icono de perfil
import { Link } from 'react-router-dom';
import Ingreso from './Ingreso.js'

function TopBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null); // Estado para el menú del perfil
  const open = Boolean(anchorEl);
  const isProfileMenuOpen = Boolean(profileMenuAnchorEl); // Booleano para saber si el menú del perfil está abierto

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Manejadores para el menú del perfil
  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Nombre de la App
        </Typography>
        <Button color="inherit" component={Link} to="/about" sx={{margin:'10px'}}>Acerca de</Button>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        {/* Icono de perfil y menú desplegable */}
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Ingreso/>
        <Menu
          id="menu-appbar"
          anchorEl={profileMenuAnchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isProfileMenuOpen}
          onClose={handleProfileMenuClose}
        >
          <MenuItem onClick={handleProfileMenuClose}>Perfil</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Mi cuenta</MenuItem>
          {/* Agrega más elementos al menú según necesites */}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

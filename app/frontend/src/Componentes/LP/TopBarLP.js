// En src/Componentes/TopBar/TopBar.js
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  FormControlLabel,
  Switch,
  Menu,
  MenuItem,
  Avatar,
  ListItemIcon,
  Divider,
  Button
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import SettingsIcon from '@mui/icons-material/Settings';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';

function TopBar({ isDarkMode, handleThemeChange }) {
  const { currentUser, logout } = useAuth();
  const locationName = useLocation().pathname;

  // Cambiar el estilo de `AppBar` si `locationName` es '/'
  const [style, setStyle] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (locationName === '/') {
      setStyle({ backgroundColor: 'transparent', boxShadow: 'none' });
    } else {
      setStyle({ boxShadow: '0px 0px 10px 0px #0000001f' });
    }
  }, [locationName]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" style={style}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Poppins', fontSize: '31px' }}>
          Kitchenify
        </Typography>
        <FormControlLabel
          style={{ display: 'flex', alignItems: 'center' }}
          control={
            <Switch
              checked={isDarkMode}
              onChange={handleThemeChange}
              name="darkModeToggle"
              color="primary"
            />
          }
          label={isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
        />
        {currentUser ? (
          <>
            <IconButton
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar alt={currentUser} src={currentUser} sx={{ bgcolor: "#ff8c90" }}/>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleProfileMenuClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem disabled>
                <Typography variant="subtitle1">{currentUser}</Typography>
              </MenuItem>
              {/* <MenuItem disabled>
                <Typography variant="body2">{currentUser}</Typography>
              </MenuItem> */}
              <Divider />
              <MenuItem component={Link} to="/settings" onClick={handleProfileMenuClose}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                Configuración
              </MenuItem>
              <MenuItem onClick={() => {
                handleProfileMenuClose();
                logout();
              }}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                Cerrar Sesión
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button variant="whiteText" component={Link} to="/">Inicio</Button>
            <Button variant='whiteText' component={Link} to="/about">Acerca de</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

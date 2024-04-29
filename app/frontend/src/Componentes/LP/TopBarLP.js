import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

function TopBar() {

  const { currentUser, logout } = useAuth();
  const locationName = useLocation().pathname;

  //cambiar el estilo de appbar si el locationName es Header
  const [style, setStyle] = useState(null);

  useEffect(() => {
    if (locationName === '/') {
      setStyle({ backgroundColor: 'transparent', boxShadow: 'none' })
    } else {
      setStyle({ boxShadow: '0px 0px 10px 0px #0000001f' })
    }
  }, [locationName])


  return (
    <AppBar position="sticky" style={style}>

      <Toolbar >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Poppins', fontSize: '31px' }}>
          Kitchenify
        </Typography>
        {currentUser ? (
          <Button variant="whiteText" component={Link} to="/" onClick={logout}>Cerrar Sesión</Button>
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

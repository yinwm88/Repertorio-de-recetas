import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import BlenderIcon from '@mui/icons-material/Blender';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  //Cambiar el cntenido del drawer
  const [drawerContent, setDrawerContent] = useState("Inicio");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (text) => {
    setDrawerContent(text);
  };

  return (
    <Box style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            style={{
              marginRight: 5,
              display: open ? 'none' : 'inline-flex',
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Configuracion
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        {['Datos', 'Utensilios', 'Estadisticas', 'Volver'].map((text, index) => (
            <ListItem key={text} disablePadding style={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => handleListItemClick(text)}
                  style={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    paddingLeft: 20,
                  }}
                >
                <ListItemIcon
                  style={{
                    minWidth: 0,
                    marginRight: open ? 24 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 ? <AssignmentIndIcon /> : index === 1 ? <BlenderIcon /> : index=== 2? <LeaderboardRoundedIcon />: <KeyboardReturnRoundedIcon/>}
                </ListItemIcon>
                <ListItemText primary={text} style={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        ))}

        </List>
        <Divider />

      </Drawer>
      <Box component="main" style={{ flexGrow: 1, padding: 20 }}>
        <DrawerHeader />
        {drawerContent === 'Datos' && (
          <Typography paragraph>
            Contenido para Datos
          </Typography>
        )}
        {drawerContent === 'Utensilios' && (
          <Typography paragraph>
            Contenido para Utensilios
          </Typography>
        )}
        {drawerContent === 'Estadisticas' && (
          <Typography paragraph>
            Contenido para Estadisticas
          </Typography>
        )}
        {drawerContent === 'Volver' && (
          //hacer link para volver a la pagina de inicio
          <Typography paragraph>
             Para SAlir
          </Typography>
        )}
      </Box>

    </Box>
  );
}

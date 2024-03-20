import { createTheme } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5A5F', // Rojo suave característico de Airbnb
    },
    secondary: {
      main: '#008489', // Turquesa, usado en el sitio de Airbnb para contrastes
    },
    error: {
      main: '#E41E26', // Rojo error, más intenso
    },
    background: {
      default: '#fff', // Fondo blanco para mantener el diseño limpio y brillante
    },
    text: {
      primary: '#484848', // Gris oscuro para textos, proporciona suficiente contraste sin ser duro
      secondary: '#767676', // Gris más claro para subtextos o elementos menos importantes
    },
  },

  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '2.125rem', // Títulos grandes
      fontWeight: 400,
    },
    h2: {
      fontSize: '1.5rem', // Subtítulos
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem', // Texto estándar
      fontWeight: 400,
    },
    button: {
      textTransform: 'none', // Los botones no deberían tener texto en mayúsculas automáticamente
      fontWeight: 500,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // Bordes más redondeados para los botones
          padding: '8px 15px', // Padding ajustado para los botones
          fontSize: '0.875rem', // Tamaño de letra para los botones
          color: '#fff', // Texto blanco para mayor legibilidad sobre colores de fondo
          backgroundColor: '#FF5A5F', // Fondo rojo suave característico para los botones
          '&:hover': {
            backgroundColor: '#E57373', // Un rojo más claro para el estado hover
          },






        },
      },
    },
  },
});

export default theme;

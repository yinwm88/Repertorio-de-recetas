import { createTheme, GlobalStyles } from '@mui/material';
import { red, teal, green, amber } from '@mui/material/colors';

// Estilos globales para personalizar las barras de desplazamiento
const globalStyles = (isDarkMode) => ({
  '*::-webkit-scrollbar': {
    width: '12px',
    height: '12px',
  },
  '*::-webkit-scrollbar-track': {
    background: isDarkMode ? '#2e2e2e' : '#f0f0f0',
  },
  '*::-webkit-scrollbar-thumb': {
    background: isDarkMode ? '#b0b0b0' : '#888888',
    borderRadius: '10px',
    border: `3px solid ${isDarkMode ? '#2e2e2e' : '#f0f0f0'}`,
  },
  '*::-webkit-scrollbar-thumb:hover': {
    background: isDarkMode ? '#ffffff' : '#4a4a4a',
  },
  html: {
    scrollbarGutter: 'stable',
  },
});

// Tema claro
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF5A5F',
    },
    secondary: {
      main: '#4caf50',
    },
    error: {
      main: red[700],
    },
    background: {
      default: '#fff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#484848',
      secondary: '#767676',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#484848',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            borderRadius: 20,
            backgroundColor: '#FF5A5F',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#4caf50',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            borderRadius: 20,
            borderColor: '#4caf50',
            color: '#4caf50',
            '&:hover': {
              backgroundColor: teal[100],
              borderColor: '#008480',
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: green[500],
            '&:hover': {
              backgroundColor: green[100],
            },
          },
        },
        {
          props: { variant: 'whiteText' },
          style: {
            color: '#fff',
            '&:hover': {
              backgroundColor: '#e3e3e34a',
            },
          },
        },
        {
          props: { variant: 'blackText' },
          style: {
            color: '#000',
            '&:hover': {
              backgroundColor: '#eee',
            },
          },
        },
        {
          props: { variant: 'semiContained' },
          style: {
            borderRadius: 20,
            background: '#4caf5033',
            borderColor: '#4caf50',
            color: '#4caf50',
            '&:hover': {
              backgroundColor: teal[100],
              borderColor: '#008480',
            },
          },
        },
      ],
    },
  },
});

// Tema oscuro
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF5A5F',
    },
    secondary: {
      main: '#4caf50',
    },
    error: {
      main: red[700],
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            borderRadius: 20,
            backgroundColor: '#FF5A5F',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#4caf50',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            borderRadius: 20,
            borderColor: '#4caf50',
            color: '#4caf50',
            '&:hover': {
              backgroundColor: teal[700],
              borderColor: '#008480',
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: green[500],
            '&:hover': {
              backgroundColor: green[700],
            },
          },
        },
        {
          props: { variant: 'whiteText' },
          style: {
            color: '#fff',
            '&:hover': {
              backgroundColor: '#e3e3e34a',
            },
          },
        },
        {
          props: { variant: 'blackText' },
          style: {
            color: '#fff',
            '&:hover': {
              backgroundColor: '#eee',
            },
          },
        },
        {
          props: { variant: 'semiContained' },
          style: {
            borderRadius: 20,
            background: '#4caf5033',
            borderColor: '#4caf50',
            color: '#4caf50',
            '&:hover': {
              backgroundColor: teal[700],
              borderColor: '#008480',
            },
          },
        },
      ],
    },
  },
});

const GlobalStyleLight = <GlobalStyles styles={globalStyles(false)} />;
const GlobalStyleDark = <GlobalStyles styles={globalStyles(true)} />;

export { lightTheme, darkTheme, GlobalStyleLight, GlobalStyleDark };

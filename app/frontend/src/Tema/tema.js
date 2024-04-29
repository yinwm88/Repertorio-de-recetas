import { createTheme } from '@mui/material';
import { red, teal, green, amber } from '@mui/material/colors';

const theme = createTheme({
  palette: {
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
          props: { variant: 'whiteText' }, // Variante con texto blanco
          style: {
            color: '#fff', // Texto blanco
            '&:hover': {
              backgroundColor: '#e3e3e34a', // Fondo más claro en hover
            },
          },
        },
        {
          props: { variant: 'blackText' }, // Variante con texto negro
          style: {
            color: '#000', // Texto negro
            '&:hover': {
              backgroundColor: '#eee', // Fondo más claro en hover
            },
          },
        },
        {
          props: { variant: 'semiContained' },
          style: {
            borderRadius: 20,
            background:'#4caf5033',
            borderColor: '#4caf50',
            color: '#4caf50',
            '&:hover': {
              backgroundColor: teal[100],
              borderColor: '#008480',
            },
          }

        }
      ],
    },
  },
});

export default theme;

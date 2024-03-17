import { createTheme } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(0, 0, 0, 0.8)',
    },
    secondary: {
      main: 'rgb(300, 100, 0)',
    },
  },

  typography: {
    body1: {
      fontSize: '18px',
      lineHeight: 1.5,
      marginTop: '2px',
      marginBottom: '2px',
      fontFamily:['Roboto'],
    },
  },
  
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          transition: 'background-color 0.3s', 
          '&:hover': {
            backgroundColor: 'rgb(300, 100, 0)', 
          },
          width: '110px',
          height: '40px',
          borderRadius:'30px',
          fontFamily:  'serif', 
          fontSize: '15px', 
          fontWeight:'bold',
        },
      },
    },
  },
});

export default theme;

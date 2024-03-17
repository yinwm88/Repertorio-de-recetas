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
          width: '120px',
          height: '40px',
          borderRadius:'30px',
        },
      },
    },
  },
});

export default theme;

import { Container, Typography, Box} from '@mui/material';
import './Inicio.css';
import TFuncionalidad from './TFuncionalidad';

function Inicio() {

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography sx={{ fontFamily: 'Poppins' }} variant="h2" component="h1" gutterBottom sx={{ flexGrow: 1, fontFamily: 'sans-serif', fontSize: '65px' }}>
          Kitchenify
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins' }} variant="h5" component="h2" gutterBottom>
          ¿De qué se trata?
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins' }} variant="body1">
          Kitchenify es tu asistente de cocina personalizado. Ofrecemos un repertorio de recetas adaptadas a tus ingredientes disponibles en la cocina, tus gustos, alergias y estado de salud.
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins' }} variant="body1">
          Nuestro objetivo es resolver problemas comunes en la cocina, como el desperdicio de ingredientes, la falta de control en la dieta y la indecisión sobre qué cocinar.
        </Typography>
        <Typography sx={{ fontFamily: 'Poppins' }} variant="body1">
          Con Kitchenify, descubrirás nuevas recetas, aprenderás técnicas de cocina y te convertirás en un chef experto desde la comodidad de tu hogar.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography sx={{ fontFamily: 'Poppins' }} variant="h4" gutterBottom>
            Funcionalidades destacadas
          </Typography>
          <TFuncionalidad/>
        </Box>
      </Box>
    </Container>
  );
}


export default Inicio;

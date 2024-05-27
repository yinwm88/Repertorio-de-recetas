import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme, selected }) => ({
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: selected
    ? 'rgba(49,96,128, 0.8)'
      : 'rgba(49,96,128, 0.8)',
    
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{width:'20px' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
    ? 'rgba(27,79,114, 0.8)' 
    :  'rgba(27,79,114, 0.8)' ,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function TFuncionalidad() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{color: 'white', fontFamily: 'Poppins' }} variant="h6">RECETAS IDEALES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: 'white',fontSize:'18px', fontFamily: 'Poppins' }}>
          Encuentra recetas adaptadas a tus preferencias y los ingredientes que tienes en tu cocina.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{color: 'white', fontFamily: 'Poppins' }} variant="h6">FILTRAR RECETAS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: 'white',fontSize:'18px', fontFamily: 'Poppins' }}>
          Encuentra fácilmente recetas por nombre, ingredientes o tipo de cocina.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{color: 'white', fontFamily: 'Poppins' }} variant="h6">BUSCAR RECETAS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: 'white',fontSize:'18px', fontFamily: 'Poppins' }}>
          Explora el repertorio de recetas generado para ti.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography sx={{color: 'white', fontFamily: 'Poppins' }} variant="h6">MARCAR RECETAS FAVORITAS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: 'white',fontSize:'18px', fontFamily: 'Poppins' }}>
            Guarda tus recetas favoritas para acceder rápidamente a ellas en el futuro.         
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography sx={{color: 'white', fontFamily: 'Poppins' }} variant="h6">AÑADIR RECETAS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: 'white',fontSize:'18px', fontFamily: 'Poppins' }}>
            Crea y guarda tus propias recetas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography sx={{color: 'white', fontFamily: 'Poppins' }} variant="h6">GENERAR LISTA DE INGREDIENTES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{color: 'white',fontSize:'18px', fontFamily: 'Poppins' }} >
            Genera automáticamente una lista de compras basada en la receta que has seleccionado.          
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default TFuncionalidad;



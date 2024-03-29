import React, { useState } from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function TFuncionalidad() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    if (expandedCardIndex === index) {
      setExpandedCardIndex(null);
    } else {
      setExpandedCardIndex(index);
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
          <Card
            sx={{
              backgroundColor: '#1b4f72',
              width: '100%',
              transition: 'transform 0.3s',
              transform: expandedCardIndex === index ? 'translateY(-10px)' : 'none',
            }}
            onClick={() => handleCardClick(index)}
          >
            <CardContent sx={{ color: 'white', minHeight: '65px' }}>
              <Typography sx={{ color: 'white' }} variant="h5" gutterBottom>
                {feature.title}
                <ExpandMoreIcon style={{ marginRight: '8px' }} />
              </Typography>
            </CardContent>
            {expandedCardIndex === index && (
              <CardContent sx={{ color: 'white', backgroundColor: '#1b4f72', minHeight: '80px', textAlign: 'center' }}>
                <Typography variant="body1">{feature.description}</Typography>
              </CardContent>
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

const features = [
  {
    title: 'RECETAS IDEALES',
    description: 'Encuentra recetas adaptadas a tus preferencias y los ingredientes que tienes en tu cocina.',
  },
  {
    title: 'FILTRAR RECETAS',
    description: 'Encuentra fácilmente recetas por nombre, ingredientes o tipo de cocina.',
  },
  {
    title: 'GENERAR LISTA DE INGREDIENTES',
    description: 'Genera automáticamente una lista de compras basada en la receta que has seleccionado.',
  },
  {
    title: 'BUSCAR RECETAS',
    description: 'Explora el repertorio de recetas generado para ti.',
  },
  {
    title: 'MARCAR RECETAS FAVORITAS',
    description: 'Guarda tus recetas favoritas para acceder rápidamente a ellas en el futuro.',
  },
  {
    title: 'AÑADIR RECETAS',
    description: 'Crea y guarda tus propias recetas.',
  },
];

export default TFuncionalidad;

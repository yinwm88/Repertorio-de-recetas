// Inicio.js

import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import './Inicio.css';

function Inicio() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    if (expandedCardIndex === index) {
      setExpandedCardIndex(null);
    } else {
      setExpandedCardIndex(index);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Kitchenify
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          ¿De qué se trata?
        </Typography>
        <Typography variant="body1">
          Kitchenify es tu asistente de cocina personalizado. Ofrecemos un repertorio de recetas adaptadas a tus ingredientes disponibles en la cocina, tus gustos, alergias y estado de salud.
        </Typography>
        <Typography variant="body1">
          Nuestro objetivo es resolver problemas comunes en la cocina, como el desperdicio de ingredientes, la falta de control en la dieta y la indecisión sobre qué cocinar.
        </Typography>
        <Typography variant="body1">
          Con Kitchenify, descubrirás nuevas recetas, aprenderás técnicas de cocina y te convertirás en un chef experto desde la comodidad de tu hogar.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Funcionalidades destacadas
          </Typography>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  className={`feature-card ${expandedCardIndex === index ? 'expanded' : ''}`} 
                  onClick={() => handleCardClick(index)} 
                >
                  <CardContent>
                    <Typography variant="h6" component="h2" gutterBottom>
                      {feature.title}
                    </Typography>
                    {expandedCardIndex === index && (
                      <Typography variant="body2">
                        {feature.description}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
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

export default Inicio;

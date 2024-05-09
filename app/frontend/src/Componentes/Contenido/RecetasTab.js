// Archivo: RecetaTab.js
import React from 'react';
import { Container } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import Pin from '../Pin';
import './RecetaTab.css';

function RecetaTab({ title, recipes, currentUser, markAsFavorite }) {
  return (
    <div className="scrollable-container">
      <Container maxWidth={false} className='contenido' style={{ height: '100vh' }}>
        <h1>{title}</h1>
        <Masonry columns={{ xs: 2, sm: 3, md: 3 }} spacing={2.5}>
          {recipes.map(
            (recipe) =>
              recipe.id &&
              recipe.porcentaje > 0 && (
                <Pin
                  id={recipe.id}
                  onMarkFavorite={() => markAsFavorite(recipe.id, currentUser)}
                  key={recipe.id}
                  porcentaje={recipe.porcentaje}
                  pinSize={recipe.pinSize || "medium"}
                  imgSrc={recipe.imageUrl}
                  name={recipe.nombre}
                  link={`/receta/${recipe.id}`}
                  recipeDetails={recipe}
                />
              )
          )}
        </Masonry>
      </Container>
    </div>
  );
}

export default RecetaTab;

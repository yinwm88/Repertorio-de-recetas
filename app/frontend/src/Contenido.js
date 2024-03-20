import React, { useEffect, useState } from 'react';
import { Grid, Card, Container, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { db } from './firebaseConfig';
import IngredientesBar from './IngredientesBar';
import FiltroRecetas from './Filtros';
import Pin from './Pin';
import './App.css';
function Contenido() {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(20); // Puedes ajustar este valor según tus necesidades
  const [lastKey, setLastKey] = useState('');

  useEffect(() => {
    fetchRecipes();
  }, [currentPage]); // Dependencia actualizada a currentPage

  const fetchRecipes = () => {
    console.log("Intentando recuperar recetas...");
    let query = db.ref('recetas').orderByKey().limitToFirst(recipesPerPage);

    if (lastKey) {
      query = query.startAt(lastKey);
    }

    query.once('value', async (snapshot) => {
      console.log("Datos recibidos de Firebase:", snapshot.val());
      const recipesData = snapshot.val();
      if (!recipesData) {
        return;
      }

      const recipesList = await Promise.all(Object.keys(recipesData).map(async (key) => {
        const imageUrl = await fetchImageForRecipe(recipesData[key].title); // Buscar la imagen basada en el título de la receta
        return {
          id: key,
          ...recipesData[key],
          imageUrl, // Agregar la URL de la imagen a la receta
        };
      }));

      // Actualizar el estado con las nuevas recetas, incluidas las imágenes
      if (recipesList.length > 0) {
        setLastKey(recipesList[recipesList.length - 1].id);
        setRecipes(recipes.concat(recipesList));
      }
    });
  };


  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Ajustar la lógica para mostrar las recetas actuales basadas en la paginación
  const currentRecipes = recipes.slice(0, currentPage * recipesPerPage);

  // Estilo para el contenedor desplazable
  const scrollableContainerStyle = {
    maxHeight: '600px', // Ajusta esta altura a tus necesidades
    overflowY: 'auto'
  };

  const fetchImageForRecipe = async (recipeName) => {
    const apiKey = 'b_AdzULWC-uN9c6WbeuSD0wN7kSgl0FT1ir-vpelHD8';
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(recipeName)}&client_id=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results.length > 0) {
        return data.results[0].urls.small; // Retorna la URL de la primera imagen encontrada
      }
      return 'https://via.placeholder.com/150'; // Una imagen por defecto si no se encuentran resultados
    } catch (error) {
      console.error('Error fetching image:', error);
      return 'https://via.placeholder.com/150'; // Retorna una imagen por defecto en caso de error
    }
  };


  return (
    <Container maxWidth="false">

      <Grid container spacing={4}>
        <Grid item sm={12} md={4}>
          <IngredientesBar />
        </Grid>
        <Grid item sm={12} md={8}>

          <FiltroRecetas />

          <div style={scrollableContainerStyle}>
            {/* Cambio importante aquí: Usamos el componente Pin en lugar de Card */}
            <div className='gridPinterest'>
              {currentRecipes.map((recipe) => (
                <Pin
                  key={recipe.id}
                  pinSize="medium" // Ejemplo de cómo asignar un tamaño. Ajusta según sea necesario.
                  imgSrc={recipe.imageUrl || 'https://via.placeholder.com/150'}
                  name={recipe.title}
                  // Suponiendo que cada receta tiene un campo 'link'. Si no es así, omite o ajusta.
                  link={recipe.link || '#'}
                />
              ))}
            </div>
            <div>
              <button onClick={() => paginate(currentPage + 1)}>Cargar más</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );

}

export default Contenido;

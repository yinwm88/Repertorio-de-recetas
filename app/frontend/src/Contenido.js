import React, { useEffect, useState } from 'react';
import { Grid, Card, Container, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { db } from './firebaseConfig';
import IngredientesBar from './IngredientesBar';

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

    query.once('value', snapshot => {
      console.log("Datos recibidos de Firebase:", snapshot.val());
      const recipesData = snapshot.val();
      if (!recipesData) {
        return;
      }
      const recipesList = Object.keys(recipesData).map(key => ({
        id: key,
        ...recipesData[key],
      }));

      // Actualizar el último elemento recuperado si hay más datos
      if (recipesList.length > 0) {
        setLastKey(recipesList[recipesList.length - 1].id);
        setRecipes(recipes.concat(recipesList)); // Concatenar con los ya cargados
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

  return (
    <Container maxWidth="false">
      <Grid container spacing={4}>
        <Grid item sm={12} md={4}>
          <IngredientesBar />
        </Grid>
        <Grid item sm={12} md={8}>
          <div style={scrollableContainerStyle}>

            <Grid container spacing={4}>
              {currentRecipes.map((recipe) => (
                <Grid item key={recipe.id} xs={12} sm={6} md={4}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={recipe.imageUrl || 'https://via.placeholder.com/150'}
                        alt={recipe.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {recipe.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {recipe.tags?.join(', ')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {recipe.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Seleccionar
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
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

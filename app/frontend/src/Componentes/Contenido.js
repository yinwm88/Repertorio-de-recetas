import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import { db } from './firebaseConfig';
import IngredientesBar from './IngredientesBar';
import FiltroRecetas from './Filtros';
import Masonry from '@mui/lab/Masonry';
import FormOpcional from './FormOpcional';
import Pin from './Pin';
import './App.css';

function Contenido() {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(20); 
  const [lastKey, setLastKey] = useState('');
  const [showForm, setShowForm] = useState(false); 

  useEffect(() => {
    // ira la lógica para verificar si el usuario ha iniciado sesión y si es la primera vez
    // Si es la primera vez, mostrar el formulario emergente
    // Por ahora, se mostrara el formulario siempre 
    setShowForm(true);
  }, []); // Se ejecuta solo una vez al cargar el componente

  useEffect(() => {
    fetchRecipes();
  }, [currentPage]); 

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
        const imageUrl = await fetchImageForRecipe(recipesData[key].title); 
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

  // Función para manejar el cierre del formulario
  const handleFormClose = () => {
    setShowForm(false);
  };

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Ajustar la lógica para mostrar las recetas actuales basadas en la paginación
  const currentRecipes = recipes.slice(0, currentPage * recipesPerPage);

  // Estilo para el contenedor desplazable
  const scrollableContainerStyle = {
    maxHeight: '600px', 
    overflowY: 'auto'
  };

  const fetchImageForRecipe = async (recipeName) => {
    const apiKey = 'b_AdzULWC-uN9c6WbeuSD0wN7kSgl0FT1ir-vpelHD8';
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(recipeName)}&client_id=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results.length > 0) {
        return data.results[0].urls.small; 
      }
      return 'https://via.placeholder.com/150'; 
    } catch (error) {
      console.error('Error fetching image:', error);
      return 'https://via.placeholder.com/150'; 
    }
  };

  return (
    <Container maxWidth="false" className='contenido'>
      
      {/* Mostrar el formulario si showForm es verdadero */}
      {showForm && <FormOpcional onClose={handleFormClose} />} 
      
      <Grid container spacing={4}>
        <Grid item sm={12} md={4}>
          <IngredientesBar />
        </Grid>
        <Grid item sm={12} md={8}>
          <FiltroRecetas />
          <Container maxWidth="false" className="contenido">
            <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
              {currentRecipes.map((recipe) => (
                <Pin
                  key={recipe.id}
                  pinSize={recipe.pinSize || "medium"} 
                  imgSrc={recipe.imageUrl || 'https://via.placeholder.com/150'}
                  name={recipe.title}
                  link={recipe.link || '#'}
                />
              ))}
            </Masonry>
            <button onClick={() => paginate(currentPage + 1)}>Cargar más</button>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contenido;
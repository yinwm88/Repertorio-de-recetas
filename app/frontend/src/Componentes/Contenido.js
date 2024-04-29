import React, { useEffect, useState } from 'react';
import { Grid, Container, Button } from '@mui/material';
import { db } from '../firebaseConfig';
import IngredientesBar from './IngredientesBar';
import FiltroRecetas from './Filtros';
import Masonry from '@mui/lab/Masonry';
import FormOpcional from './RegistrosFormOp/FormOpcional';

import CrearReceta from './CrearReceta/CrearReceta';
import BotonParaCrearReceta from './CrearReceta/BotonParaCrearReceta';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Pin from './Pin';
import './Contenido.css';
import { useAuth, getToken } from '../AuthContext';


function Contenido() {
  const [recipes, setRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);


  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(20);
  const [lastKey, setLastKey] = useState('');
  const [searchText, setSearchText] = useState('');
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [showForm, setShowForm] = useState(true);
  const handleFormClose = () => setShowForm(false);

  const { currentUser, getToken } = useAuth();


  useEffect(() => {
    const fetchUserRecetas = async () => {
      const response = await fetch('http://localhost:3001/receta/recetasUsuario', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`,

        },

      });

      const data = await response.json();

      console.log('ALLDATA', data)

      const userRecipesDetails = await Promise.all(data.recetas.map(async (receta) => {
        const imageUrl = await fetchImageForRecipe(receta.nombre); // Reutiliza tu función existente para obtener imágenes

        return {
          id: receta.idreceta,
          ...receta,
          imageUrl,
        };
      }));

      setUserRecipes(userRecipesDetails);
    };

    fetchUserRecetas();
  }, [currentUser, lastUpdate]);


  //Generar Recetas
  useEffect(() => {
    const fetchRecetas = async () => {
      // Paso 2: Fetchear la lista de recetas que el usuario puede hacer
      const response = await fetch('http://localhost:3001/receta/recetasIncompletas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: currentUser,
        }),
      });

      const data = await response.json();

      console.log('Datos Recibidos', data)

      // Paso 3: Fetchear los detalles de cada receta
      const recipesDetails = await Promise.all(data.recetas.map(async (receta) => {
        const responseReceta = await fetch(`http://localhost:3001/receta/datosReceta/${receta.idreceta}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },

        });

        const dataReceta = await responseReceta.json();
        // console.log('Receta recibida:', dataReceta)
        const imageUrl = await fetchImageForRecipe(dataReceta.nombre); // Usa tu función existente para obtener la imagen

        return {
          id: receta.idreceta,
          ...dataReceta,
          imageUrl,
        };
      }));

      setRecipes(recipesDetails);
    };

    fetchRecetas();
  }, [lastUpdate]);

  // Añadir una función para manejar cambios en la búsqueda
  const handleSearchChange = (text) => {
    setSearchText(text.toLowerCase());
  };
  // Filtrar recetas basadas en el texto de búsqueda antes de renderizarlas
  // const filteredRecipes = recipes.filter(recipe =>
  //   recipe.title.toLowerCase().includes(searchText)
  // );


  // ----------------FIREBASE

  // useEffect(() => {
  //   fetchRecipes();
  // }, [currentPage]); // Dependencia actualizada a currentPage

  // const fetchRecipes = () => {
  //   console.log("Intentando recuperar recetas...");
  //   let query = db.ref('recetas').orderByKey().limitToFirst(recipesPerPage);

  //   if (lastKey) {
  //     query = query.startAt(lastKey);
  //   }

  //   query.once('value', async (snapshot) => {
  //     console.log("Datos recibidos de Firebase:", snapshot.val());
  //     const recipesData = snapshot.val();
  //     if (!recipesData) {
  //       return;
  //     }

  //     const recipesList = await Promise.all(Object.keys(recipesData).map(async (key) => {
  //       const imageUrl = await fetchImageForRecipe(recipesData[key].title); // Buscar la imagen basada en el título de la receta
  //       return {
  //         id: key,
  //         ...recipesData[key],
  //         imageUrl, // Agregar la URL de la imagen a la receta
  //       };
  //     }));

  //     // Actualizar el estado con las nuevas recetas, incluidas las imágenes
  //     if (recipesList.length > 0) {
  //       setLastKey(recipesList[recipesList.length - 1].id);
  //       setRecipes(recipes.concat(recipesList));
  //     }
  //   });
  // };

  // Cambiar página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Ajustar la lógica para mostrar las recetas actuales basadas en la paginación
  const currentRecipes = recipes.slice(0, currentPage * recipesPerPage);

  // Estilo para el contenedor desplazable
  const scrollableContainerStyle = {
    maxHeight: '600px',
    overflowY: 'auto'
  };

  // ----------------FIREBASE

  const fetchImageForRecipe = async (recipeName) => {



    // Claves API para cada servicio
    const unsplashApiKey = 'b_AdzULWC-uN9c6WbeuSD0wN7kSgl0FT1ir-vpelHD8';
    const pexelsApiKey = 'sY5tEwT4E7thugNrTx8eoLbu2YLlBri6ZtsQy5Fq1ULDLaewybrFuvDg';
    const pixabayApiKey = '43641615-297e61c4d9af146e80502ee5b';
    const flickrApiKey = '901aeda7df55b720f817e24c8de7455e';

    // URL de búsqueda para cada API
    const urls = [
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(recipeName +' dish')}&client_id=${unsplashApiKey}`,
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApiKey}&text=${encodeURIComponent(recipeName + ' food')}&format=json&nojsoncallback=1`,
      `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent(recipeName + ' food')}`,
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(recipeName + ' dish')}&per_page=1`,


    ];

    for (const url of urls) {
      try {
        const response = await fetch(url, {
          headers: url.includes('pexels') ? { Authorization: pexelsApiKey } : {}
        });
        const data = await response.json();
        let imageUrl = '';

        if (url.includes('unsplash') && data.results.length > 0) {
          imageUrl = data.results[0].urls.small;
        } else if (url.includes('pexels') && data.photos.length > 0) {
          imageUrl = data.photos[0].src.small;
        } else if (url.includes('pixabay') && data.hits.length > 0) {
          imageUrl = data.hits[0].webformatURL;
        } else if (url.includes('flickr') && data.photos.photo.length > 0) {
          const photo = data.photos.photo[0];
          imageUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`;
        }

        if (imageUrl) {
          return imageUrl;
        }
      } catch (error) {
        console.error(`Error fetching image from ${url}:`, error);
      }
    }

    return 'https://via.placeholder.com/150';
  };

  const markAsFavorite = async (idReceta) => {
    try {
      const response = await fetch('http://localhost:3001/receta/marcarFavorita', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idReceta,
          correo: currentUser,

        }),
      });

      if (!response.ok) {
        throw new Error(`No se pudo marcar la receta ${idReceta} como favorita`);
      }

      console.log(`Receta con id ${idReceta} marcada como favorita`);

    } catch (error) {
      console.error('Error al marcar como favorita:', error);
    }
  };

  // const clickButton = () => {
  //   console.log(getToken())
  // }

  return (
    <Container maxWidth="false" className='contenido'>

      {showForm && <FormOpcional onClose={handleFormClose} />}

      <Grid container spacing={4}>
        <Grid item sm={12} md={4}>
          <BotonParaCrearReceta />

          <IngredientesBar lastUpdate={lastUpdate} setLastUpdate={setLastUpdate} />

        </Grid>

        <Grid item sm={12} md={8}>
          <FiltroRecetas />
          <Container maxWidth="false" className="contenido">
            <h1>Mis recetas</h1>
            <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
              {
                userRecipes.map((recipe) => (
                  <Pin
                    id={recipe.id}
                    onMarkFavorite={markAsFavorite}
                    key={recipe.id}
                    pinSize={recipe.pinSize || "medium"}
                    imgSrc={recipe.imageUrl}
                    name={recipe.nombre}
                    link={`/receta/${recipe.id}`} // Asume que tienes una ruta para mostrar los detalles de la receta
                    recipeDetails={recipe}
                  />
                ))
              }
            </Masonry>
            <h1>Recetas de la Comunidad</h1>
            <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
              {recipes.map((recipe) => (
                //renderiza solo si tiene id 
                recipe.id && (
                  <Pin
                    id={recipe.id}
                    onMarkFavorite={markAsFavorite}
                    key={recipe.id}
                    pinSize={recipe.pinSize || "medium"}
                    imgSrc={recipe.imageUrl}
                    name={recipe.nombre}
                    link={`/receta/${recipe.id}`} // Asume que tienes una ruta para mostrar los detalles de la receta
                    recipeDetails={recipe}
                  />
                )
              ))}
            </Masonry>
          </Container>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Contenido;
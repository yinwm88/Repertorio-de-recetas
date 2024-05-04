import React, { useEffect, useState } from 'react';
import { Grid, Container, Button } from '@mui/material';
import { db } from '../firebaseConfig';
import IngredientesBar from './IngredientesBar';
import FiltroRecetas from './Filtros';
import Masonry from '@mui/lab/Masonry';
import FormOpcional from './RegistrosFormOp/FormOpcional';

import CrearReceta from './CrearReceta/CrearReceta';
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

  const [isAgregarRecetaOpen, setIsAgregarRecetaOpen] = useState(false);
  const handleOpenAgregarReceta = () => setIsAgregarRecetaOpen(true);
  const handleCloseAgregarReceta = () => setIsAgregarRecetaOpen(false);


  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        const response = await fetch('http://localhost:3001/receta/recetasIncompletas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            correo: currentUser,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data.recetas)) {
          throw new Error('Invalid data format');
        }

        const recipesDetails = await Promise.all(data.recetas.map(async (receta) => {
          const responseReceta = await fetch(`http://localhost:3001/receta/datosReceta/${receta.idreceta}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!responseReceta.ok) {
            // throw new Error(`HTTP error! Status: ${responseReceta.status}`);
            console.log(`HTTP error! Status: ${responseReceta.status}`);
          }

          const dataReceta = await responseReceta.json();

          if (!dataReceta.nombre) {
            console.log('Invalid data format');
          }

          const imageUrl = await fetchImageForRecipe(dataReceta.nombre);

          return {
            id: receta.idreceta,
            ...dataReceta,
            porcentaje: receta.porcentaje,
            imageUrl,
          };
        }));

        // console.log('Recipes:', recipesDetails)
        setRecipes(recipesDetails);
        filtrarRecetas(recipesDetails);
      } catch (error) {
        console.error('Error fetching recipes:', error);

        setRecipes([]);
      }
    };

    fetchRecetas();
  }, [lastUpdate]);





  const fetchImageForRecipe = async (recipeName) => {



    const unsplashApiKey = 'b_AdzULWC-uN9c6WbeuSD0wN7kSgl0FT1ir-vpelHD8';
    const pexelsApiKey = 'sY5tEwT4E7thugNrTx8eoLbu2YLlBri6ZtsQy5Fq1ULDLaewybrFuvDg';
    const pixabayApiKey = '43641615-297e61c4d9af146e80502ee5b';
    const flickrApiKey = '901aeda7df55b720f817e24c8de7455e';
    const urls = [
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(recipeName)}&client_id=${unsplashApiKey}&collections=food,comida&per_page=1`,
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApiKey}&text=${encodeURIComponent(recipeName)}&format=json&nojsoncallback=1&tags=comida,food`,

      `https://api.pexels.com/v1/search?query=${encodeURIComponent('food' + recipeName)}&per_page=1`,
      `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent('food' + recipeName)}`,


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

  const [filtroTiempo, setFiltroTiempo] = useState([0, 120]);

const filtrarRecetas = (recetas) => {
  return recetas
    .filter((receta) =>
      receta.tiempo >= filtroTiempo[0] && receta.tiempo <= filtroTiempo[1] &&
      receta.nombre.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => b.porcentaje - a.porcentaje);
};

  return (
    <Container maxWidth="false" className='contenido'>

      {showForm && <FormOpcional onClose={handleFormClose} />}
      <CrearReceta isOpen={isAgregarRecetaOpen} onClose={handleCloseAgregarReceta} />

      <Grid container spacing={4}>
        <Grid item sm={12} md={4}>
          <FiltroRecetas
            onSearchChange={setSearchText}
            onTimeChange={setFiltroTiempo}

          />
          <Button variant='semiContained' onClick={handleOpenAgregarReceta}>Crear Nueva Receta</Button>
          <IngredientesBar lastUpdate={lastUpdate} setLastUpdate={setLastUpdate} />
        </Grid>

        <Grid item sm={12} md={8}>

          <div className="scrollable-container">
            <Container maxWidth="false" className='contenido' style={{ height: '100vh' }}>


              <h1>Recetas</h1>
              <Masonry columns={{ xs: 2, sm: 3, md: 3 }} spacing={2.5}>
                {filtrarRecetas(recipes).map((recipe) =>
                  recipe.id && recipe.porcentaje > 0 && (
                    <Pin
                      id={recipe.id}
                      onMarkFavorite={markAsFavorite}
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
        </Grid>


      </Grid>
    </Container>
  );
}

export default Contenido;
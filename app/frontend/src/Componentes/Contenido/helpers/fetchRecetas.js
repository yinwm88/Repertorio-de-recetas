// Archivo: fetchRecetas.js
export const fetchImageForRecipe = async (recipeName) => {
  const unsplashApiKey = 'b_AdzULWC-uN9c6WbeuSD0wN7kSgl0FT1ir-vpelHD8';
  const pexelsApiKey = 'sY5tEwT4E7thugNrTx8eoLbu2YLlBri6ZtsQy5Fq1ULDLaewybrFuvDg';
  const pixabayApiKey = '43641615-297e61c4d9af146e80502ee5b';
  const flickrApiKey = '901aeda7df55b720f817e24c8de7455e';

  const urls = [
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(recipeName)}&client_id=${unsplashApiKey}&collections=food,comida&per_page=1`,
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApiKey}&text=${encodeURIComponent(recipeName)}&format=json&nojsoncallback=1&tags=comida,food`,
    `https://api.pexels.com/v1/search?query=${encodeURIComponent('food ' + recipeName)}&per_page=1`,
    `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent('food ' + recipeName)}`,
  ];

  for (const url of urls) {
    try {
      const response = await fetch(url, {
        headers: url.includes('pexels') ? { Authorization: pexelsApiKey } : {},
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

      if (imageUrl) return imageUrl;
    } catch (error) {
      console.error(`Error fetching image from ${url}:`, error);
    }
  }

  return 'https://via.placeholder.com/150';
};


export const fetchRecetas = async (currentUser, getToken, setRecipes) => {
    try {
      const response = await fetch('http://localhost:3001/generarRecetas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ correo: currentUser }),
      });
  
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
      const data = await response.json();
      if (!Array.isArray(data.recetas)) throw new Error('Invalid data format');
  
      const recipesDetails = await Promise.all(
        data.recetas.map(async (receta) => {
          const responseReceta = await fetch(`http://localhost:3001/receta/datosReceta/${receta.idReceta}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (!responseReceta.ok) {
            console.log(`HTTP error! Status: ${responseReceta.status} ${receta.idReceta}`);
            return null;
          }
  
          const dataReceta = await responseReceta.json();
          if (!dataReceta.nombre) return null;
  
          const imageUrl = await fetchImageForRecipe(dataReceta.nombre);
  
          return {
            id: receta.idReceta,
            ...dataReceta,
            porcentaje: receta.porcentaje,
            imageUrl,
          };
        })
      );
  
      setRecipes(recipesDetails.filter(Boolean));
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setRecipes([]);
    }
  };
  
  export const fetchUserRecipes = async (currentUser, getToken, setUserRecipes) => {
    try {
      const response = await fetch('http://localhost:3001/receta/recetasUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ correo: currentUser }),
      });
  
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
  
      const data = await response.json();
      if (!Array.isArray(data.recetas)) throw new Error('Invalid data format');
  
      const userRecipesDetails = await Promise.all(
        data.recetas.map(async (receta) => {
          const responseReceta = await fetch(`http://localhost:3001/receta/datosReceta/${receta.idReceta}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (!responseReceta.ok) {
            console.log(`HTTP error! Status: ${responseReceta.status} ${receta.idReceta}`);
            return null;
          }
  
          const dataReceta = await responseReceta.json();
          if (!dataReceta.nombre) return null;
  
          const imageUrl = await fetchImageForRecipe(dataReceta.nombre);
  
          return {
            id: receta.idReceta,
            ...dataReceta,
            imageUrl,
          };
        })
      );
  
      setUserRecipes(userRecipesDetails.filter(Boolean));
    } catch (error) {
      console.error('Error fetching user recipes:', error);
      setUserRecipes([]);
    }
  };
  
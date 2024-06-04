import React, { useEffect, useState } from 'react';
import { Grid, Container, Button, Tabs, Tab } from '@mui/material';
import IngredientesBar from '../IngredientesBar';
import FiltroRecetas from '../Filtros';
import Masonry from '@mui/lab/Masonry';
import CrearReceta from '../CrearReceta/CrearReceta';
import Pin from '../Pin';
import TabPanel from './TabPanel';
import { fetchRecetas, fetchUserRecipes, fetchFavoriteRecipes } from './helpers/fetchRecetas';
import { markAsFavorite } from './helpers/markAsFavorite';
import { CircularProgress } from '@mui/material';
import { useAuth } from '../../AuthContext';
import './Contenido.css';

function Contenido() {
  const { currentUser, getToken } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [isAgregarRecetaOpen, setIsAgregarRecetaOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [filtroTiempo, setFiltroTiempo] = useState([0, 120]);
  const [isLoadingRecipes, setIsLoadingRecipes] = useState(false);
  const [isLoadingUserRecipes, setIsLoadingUserRecipes] = useState(false);
  const [isLoadingFavoriteRecipes, setIsLoadingFavoriteRecipes] = useState(false);
  const [utensiliosSeleccionados, setUtensiliosSeleccionados] = useState([]);
  const [tiposFiltro, setTiposFiltro] = useState([]);

  const handleOpenAgregarReceta = () => setIsAgregarRecetaOpen(true);
  const handleCloseAgregarReceta = () => setIsAgregarRecetaOpen(false);
  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  const handleUtensiliosSeleccionadosChange = (utensilios) => {
    setUtensiliosSeleccionados(utensilios);
  };

  const triggerUpdate = () => setLastUpdate(Date.now());

  useEffect(() => {
    setIsLoadingRecipes(true);
    fetchRecetas(currentUser, getToken, (data) => {
      setRecipes(data);
      setIsLoadingRecipes(false);
    });
  }, [lastUpdate, currentUser]);

  useEffect(() => {
    if (activeTab === 1) {
      setIsLoadingUserRecipes(true);
      fetchUserRecipes(currentUser, getToken, (data) => {
        setUserRecipes(data);
        setIsLoadingUserRecipes(false);
      });
    }
  }, [activeTab, currentUser]);

  useEffect(() => {
    if (activeTab === 2) {
      setIsLoadingFavoriteRecipes(true);
      fetchFavoriteRecipes(currentUser, getToken, (data) => {
        setFavoriteRecipes(data);
        setIsLoadingFavoriteRecipes(false);
      });
    }
  }, [activeTab, currentUser]);

  useEffect(() => {
    console.log('FRecetas:', favoriteRecipes);
  }, [favoriteRecipes]);

  useEffect(() => {
    console.log('URecetas:', userRecipes);
  }, [userRecipes]);

  useEffect(() => {
    console.log('Recetas:', recipes);
  }, [recipes]);

  useEffect(() => {
    console.log('Utensilios Seleccionados:', utensiliosSeleccionados);
  }, [utensiliosSeleccionados]);

  const filtrarRecetas = (recetas) => {
    if (utensiliosSeleccionados.every(u => !u.activo)) {
      return [];
    }

    return recetas.filter(
      (receta) =>
        (receta.tiempo >= filtroTiempo[0] && receta.tiempo <= filtroTiempo[1]) &&
        receta.nombre.toLowerCase().includes(searchText.toLowerCase()) &&
        (tiposFiltro.length === 0 || receta.tipos.some(tipo => tiposFiltro.includes(tipo.tipo))) &&
        (utensiliosSeleccionados.length === 0 || receta.utensilios.some(utensilio => utensiliosSeleccionados.some(u => u.idelectro === utensilio.idelectro && u.activo)))
    ).sort((a, b) => b.porcentaje - a.porcentaje);
  };

  const renderPins = (recetas) => (
    <Masonry columns={{ xs: 2, sm: 2, md: 3 }} spacing={2.5}>
      {filtrarRecetas(recetas).map(
        (recipe) =>
          recipe.id &&
          ('porcentaje' in recipe ? recipe.porcentaje > 0 : true) && (
            <Pin
              key={recipe.id}
              link={`/receta/${recipe.id}`}
              id={recipe.id}
              pinSize={recipe.pinSize || "medium"}
              imgSrc={recipe.imagen ? recipe.imagen : recipe.imageUrl}
              name={recipe.nombre}
              onMarkFavorite={() => markAsFavorite(recipe.id, currentUser)}
              recipeDetails={recipe}
              porcentaje={recipe.porcentaje || 1}
              markedFavorite={recipe.porcentaje === undefined ? true : false}
              editable={activeTab === 1}
              triggerUpdate={triggerUpdate}
            />
          )
      )}
    </Masonry>
  );

  return (
    <Container maxWidth={false} className='mainContainer'>
      <CrearReceta isOpen={isAgregarRecetaOpen} onClose={handleCloseAgregarReceta} triggerUpdate={triggerUpdate} />
      <Grid container spacing={4}>
        <Grid item sm={12} md={4}>
          <FiltroRecetas
            onSearchChange={setSearchText}
            onTimeChange={setFiltroTiempo}
            onTipoChange={setTiposFiltro}
            recipes={recipes}
          />
          <IngredientesBar lastUpdate={lastUpdate} setLastUpdate={setLastUpdate} handleUtensiliosSeleccionadosChange={handleUtensiliosSeleccionadosChange} />
        </Grid>
        <Grid item sm={12} md={8}>
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="Recetas Tabs">
            <Tab label="Recetas" />
            <Tab label="Mis recetas" />
            <Tab label="Recetas Favoritas" />
          </Tabs>
          <TabPanel value={activeTab} index={0}>
            <div className="scrollable-container">
              <Container maxWidth={false} className='contenido' style={{ height: '100vh' }}>
                <h1>Recetas</h1>
                {isLoadingRecipes ? <CircularProgress /> : renderPins(recipes)}
              </Container>
            </div>
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            <div className="scrollable-container">
              <Container maxWidth={false} className='contenido' style={{ height: '100vh' }}>
                <h1>Mis recetas</h1>
                <Button variant='semiContained' onClick={handleOpenAgregarReceta} style={{ marginTop: 0 }}>
                  Crear Nueva Receta
                </Button>
                <div style={{ height: '20px' }}></div>
                {isLoadingUserRecipes ? <CircularProgress /> : renderPins(userRecipes)}
              </Container>
            </div>
          </TabPanel>
          <TabPanel value={activeTab} index={2}>
            <div className="scrollable-container">
              <Container maxWidth={false} className='contenido' style={{ height: '100vh' }}>
                <h1>Recetas Favoritas</h1>
                {isLoadingFavoriteRecipes ? <CircularProgress /> : renderPins(favoriteRecipes)}
              </Container>
            </div>
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contenido;

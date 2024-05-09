import React, { useEffect, useState } from 'react';
import { Grid, Container, Button, Tabs, Tab } from '@mui/material';
import IngredientesBar from '../IngredientesBar';
import FiltroRecetas from '../Filtros';
import Masonry from '@mui/lab/Masonry';
import CrearReceta from '../CrearReceta/CrearReceta';
import Pin from '../Pin';
import TabPanel from './TabPanel';
import { fetchRecetas, fetchUserRecipes } from './helpers/fetchRecetas';
import { markAsFavorite } from './helpers/markAsFavorite';

import { useAuth } from '../../AuthContext';
import './Contenido.css';

function Contenido() {
  const { currentUser, getToken } = useAuth();

  const [recipes, setRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [isAgregarRecetaOpen, setIsAgregarRecetaOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [filtroTiempo, setFiltroTiempo] = useState([0, 120]);

  const handleOpenAgregarReceta = () => setIsAgregarRecetaOpen(true);
  const handleCloseAgregarReceta = () => setIsAgregarRecetaOpen(false);
  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  useEffect(() => {
    fetchRecetas(currentUser, getToken, setRecipes);
  }, [lastUpdate, currentUser]);

  useEffect(() => {
    if (activeTab === 1) fetchUserRecipes(currentUser, getToken, setUserRecipes);
  }, [activeTab, currentUser]);

  const filtrarRecetas = (recetas) =>
    recetas
      .filter(
        (receta) =>
          receta.tiempo >= filtroTiempo[0] &&
          receta.tiempo <= filtroTiempo[1] &&
          receta.nombre.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => b.porcentaje - a.porcentaje);

  const renderPins = (recetas) => (
    <Masonry columns={{ xs: 2, sm: 3, md: 3 }} spacing={2.5}>
      {filtrarRecetas(recetas).map(
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
  );

  return (
    <Container maxWidth={false} className='mainContainer'>
      <CrearReceta isOpen={isAgregarRecetaOpen} onClose={handleCloseAgregarReceta} />

      <Grid container spacing={4}>
        <Grid item sm={12} md={4}>
          <FiltroRecetas onSearchChange={setSearchText} onTimeChange={setFiltroTiempo} />
          <Button variant='semiContained' onClick={handleOpenAgregarReceta} style={{ marginTop: 0 }}>
            Crear Nueva Receta
          </Button>
          <IngredientesBar lastUpdate={lastUpdate} setLastUpdate={setLastUpdate} />
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
                {renderPins(recipes)}
              </Container>
            </div>
          </TabPanel>

          <TabPanel value={activeTab} index={1}>
            <div className="scrollable-container">
              <Container maxWidth={false} className='contenido' style={{ height: '100vh' }}>
                <h1>Mis recetas</h1>
                {renderPins(userRecipes)}
              </Container>
            </div>
          </TabPanel>

          <TabPanel value={activeTab} index={2}>
            <div className="scrollable-container">
              <Container maxWidth={false} className='contenido' style={{ height: '100vh' }}>
                <h1>Recetas Favoritas</h1>
              </Container>
            </div>
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contenido;

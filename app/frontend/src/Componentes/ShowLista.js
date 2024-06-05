import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useAuth } from '../AuthContext';

const ShowLista = () => {
    const { currentUser, getToken } = useAuth();
    const [lista, setLista] = useState(null);
    const [error, setError] = useState(null);
    const [showLista, setShowLista] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(false); 


    const getListaGenerada = async () => {
        try {
            const token = await getToken(); 
            const response = await fetch('http://localhost:3001/ingrediente/listaCompras', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },

                body: JSON.stringify({
                    correo: currentUser, 
                }),
            });
    
            if (!response.ok) {
                throw new Error('No se pudo obtener la lista');
            }
    
            const data = await response.json();


            // Obtener los nombres y unidades de los ingredientes
            const listaConNombres = await Promise.all(data.map(async (item) => {
                const { nombre, unidad } = await getDatosIngrediente(item.idingrediente);
                return { ...item, nombre, unidad };
            }));
            
            setLista(listaConNombres);
            setShowLista(listaConNombres.length !== 0);
        } catch (error) {
            setError('No se pudo obtener la lista');
            console.error(error);
        }
        
    };


    useEffect(() => {
        getListaGenerada();
    }, [currentUser, getToken, showLista]); // Added showLista as a dependency

    const getDatosIngrediente = async (idingrediente) => {
        try {
            const token = await getToken(); 
            const response = await fetch('http://localhost:3001/ingrediente/datos', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    id: idingrediente
                }),
            });

            if (!response.ok) {
                throw new Error('No se pudo obtener los datos del ingrediente');
            }

            const data = await response.json();
            return { nombre: data.nombre, unidad: data.unidad }; // Suponiendo que el objeto devuelto tiene propiedades `nombre` y `unidad`
        } catch (error) {
            console.error(error);

            return { nombre: 'Nombre desconocido', unidad: '' }; // Valores por defecto en caso de error
        }
    };
    
    return (
        <>

            <h2>Lista de Compras</h2>
            {showLista ? (
                lista ? (
                    <List>
                        {lista.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText 
                                    primary={`${item.nombre}: ${item.cantidad} ${item.unidad}`} 
                                />

                                <IconButton edge="end" aria-label="comprar" sx={{ color: '#06A0D6' }}>
                                    <LocalGroceryStoreIcon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                    <Typography color="gray">Cargando...</Typography>
                    )
                    ) : (
                        <Typography color="gray">No se ha generado ninguna lista</Typography>
                        )}
        </>
    );
};

export default ShowLista;

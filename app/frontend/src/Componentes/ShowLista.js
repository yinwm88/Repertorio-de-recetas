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


    const getDatosIngrediente = async (id) => {
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

            setLista(data);
            setShowLista(data.length !== 0);
            console.log('Lista obtenida:', data);
        } catch (error) {
            setError('No se pudo obtener la lista');
            console.error(error);
        }
        
    };

    
    const listaTolistaDatos = async () => {
        if(lista.length === 0){
            getListaGenerada();
        }else{
            try {
                const listaDatos = await Promise.all(lista.map(async (item) => {
                    const datosIngrediente = await getDatosIngrediente(item.idingrediente);
                    return {
                        idIngrediente: item.idingrediente,
                        nombre: datosIngrediente.nombre,
                        cantidad: item.cantidad,
                        unidad: datosIngrediente.unidad
                    };
                }));
                setListaDatosMostrar(listaDatos);
                console.log('ListaDatosMostrar actualizada:', listaDatos);
            } catch (error) {
                console.error('Error al convertir lista a listaDatos:', error);
            }
        }
    };
    
    //obtenemos la lista que se genero siempre que showlista sea true
    useEffect(() => {
        getListaGenerada();
    }, [showLista]);

    //convertimos la lista a listaDatos simempre que lista se actualice 
    useEffect(() => {
        listaTolistaDatos();
    }, [lista]);

    const handleComprarIngrediente = async (id) => {
        console.log('ID del ingrediente a comprar:', id);
        console.log('CurrentUser:', currentUser);
        console.log('listaDatos:', listaDatosMostrar);
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


            if (response.ok) {
                Swal.fire({
                    text: 'Ingrediente eliminado de la lista exitosamente!',
                    icon: 'success',
                });

                // Actualizar lista eliminando el elemento comprado
                setLista(prevLista =>
                    prevLista.filter(item => item.idingrediente !== id)
                );

                // Actualizar listaDatosMostrar eliminando el elemento comprado
                setListaDatosMostrar(prevListaDatosMostrar =>
                    prevListaDatosMostrar.filter(item => item.idIngrediente !== id)
                );
            } else {
                const errorText = await response.json();
                console.error('Error response:', errorText);
                Swal.fire({
                    text: errorText.error || 'No se pudo marcar como comprado el ingrediente',
                    icon: 'error',
                });
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

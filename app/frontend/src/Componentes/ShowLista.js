import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { useAuth } from '../AuthContext';
import Swal from 'sweetalert2';

const ShowLista = () => {
    const { currentUser, getToken } = useAuth();
    const [lista, setLista] = useState([]);
    const [listaDatosMostrar, setListaDatosMostrar] = useState([]);
    const [error, setError] = useState(null);
    const [showLista, setShowLista] = useState(false);


    const getDatosIngrediente = async (id) => {
        try {
            const token = await getToken();
            const response = await fetch('http://localhost:3001/ingrediente/datos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error('No se pudo obtener los datos del ingrediente');
            }

            const data = await response.json();
            return { nombre: data.nombre, unidad: data.unidad };
        } catch (error) {
            console.error(error);
            return { nombre: 'Nombre desconocido', unidad: '' };
        }
    };

    const getListaGenerada = async () => {
        try {
            const token = await getToken();
            const response = await fetch('http://localhost:3001/ingrediente/listaCompras', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ correo: currentUser }),
            });
    
            if (!response.ok) {
                throw new Error('No se pudo obtener la lista');
            }
    
            const data = await response.json();
            console.log('lista que se genero :', data);
            setLista(data);
            if(data.length !== 0){
                setShowLista(true);
                listaTolistaDatos();
            }
        } catch (error) {
            setError('No se pudo obtener la lista');
            console.error(error);
        }
        
    };
    
    const listaTolistaDatos = async () => {
        console.log('Como esta  lista antes de  sacar listaDatos:', lista);

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
            } catch (error) {
                console.error('Error al convertir lista a listaDatos:', error);
            }
    
    };
    
    

    //tratamos de obteener una listaGenerada, una vez obtenida entonces 
    useEffect(() => {
            console.log('Como esta  lista despues de eliminars:', lista);
            console.log('Como esta ListaDatosMostrar  despues de eliminars:', listaDatosMostrar);
            getListaGenerada();
    }, [!showLista]);


    const handleComprarIngrediente = async (id) => {
        console.log('Como esta ListaDatosMostrar  antes de eliminar:', listaDatosMostrar);
        console.log('ID del ingrediente a comprar:', id);
        try {
            const token = await getToken();
            const payload = { id, correo: currentUser };
            console.log('Payload:', JSON.stringify(payload));

            const response = await fetch('http://localhost:3001/ingrediente/comprar/ingrediente', {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                Swal.fire({
                    text: 'La lista de compra se vacio exitosamente!',
                    icon: 'success',
                });

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
        } catch (error) {
            console.error(error);
            Swal.fire({
                text: 'Ocurrió un error al intentar comprar el ingrediente',
                icon: 'error',
            });
        }
    };

    return (
        <>
            <h2>Lista de Compras</h2>
            {showLista ? (
                listaDatosMostrar.length > 0 ? (
                    <List>
                        {listaDatosMostrar.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText 
                                    primary={`${item.nombre}: ${item.cantidad} ${item.unidad}`} 
                                />
                                <IconButton 
                                    edge="end" 
                                    aria-label="comprar" 
                                    sx={{ color: '#06A0D6' }}
                                    onClick={() => handleComprarIngrediente(item.idIngrediente)} 
                                >
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

import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import DinnerDiningRoundedIcon from '@mui/icons-material/DinnerDiningRounded';
import { useAuth } from '../../AuthContext';

function CookedRecipeButton({ idRecipe, style }) {
    const { currentUser } = useAuth();

    const [enableCooked, setEnableCooked] = useState(false);
    const [cooked, setCooked] = useState(false);
    const [ingredientesReceta, setIngredientesReceta] = useState([]);
    const [ingredientesUsuario, setIngredientesUsuario] = useState([]);
    const [caloriasReceta, setCaloriasReceta] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const fetchIngredientesUsuario = async () => {
        try {
            const response = await fetch('http://localhost:3001/ingredientesUsuario', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ correo: currentUser }),
            });

            if (!response.ok) {
                throw new Error('No se pudo cargar los ingredientes del usuario');
            }

            const data = await response.json();
            setIngredientesUsuario(data.ingredientes);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchIngredientesUsuario();
    }, [currentUser]);

    const fetchIngredientesReceta = async () => {
        if (!idRecipe) {
            console.error("idRecipe es undefined");
            return;
        }
        
        try {
            const responseReceta = await fetch(`http://localhost:3001/receta/datosReceta/${idRecipe}`, {
                method: 'GET',
            }); 
    
            if (!responseReceta.ok) {
                console.log(`HTTP error! Status: ${responseReceta.status} ${idRecipe}`);
                return;
            }
    
            const dataReceta = await responseReceta.json();
            setIngredientesReceta(dataReceta.ingredientes);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchIngredientesReceta();
    }, [idRecipe]);   

    useEffect(() => {
            const tieneTodos = ingredientesReceta.every(ingredienteReceta => {
                const ingredienteUsuario = ingredientesUsuario.find(ing => ing.idingrediente === ingredienteReceta.idingrediente);
                return ingredienteUsuario && Number(ingredienteUsuario.cantidad) >= Number(ingredienteReceta.cantidad);
            });
            setEnableCooked(tieneTodos);
    }, [ingredientesReceta, ingredientesUsuario]);

    useEffect(() => {
        const fetchCaloriasIngredientes = async () => {
            try {
                let totalCalorias = 0;

                for (const ingrediente of ingredientesReceta) {
                    const responseIngrediente = await fetch(`http://localhost:3001/ingrediente/datos`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: ingrediente.idingrediente }),
                    });

                    if (!responseIngrediente.ok) {
                        console.log(`HTTP error! Status: ${responseIngrediente.status} ${ingrediente.idingrediente}`);
                        continue;
                    }   

                    const dataIngrediente = await responseIngrediente.json();
                    const unidadIngrediente = dataIngrediente.unidad;
                    const caloriaIngrediente = Number(dataIngrediente.calorias);
                    const cantidadUsada = Number(ingrediente.cantidad);
                    let unidad = 0;
                    if (!isNaN(caloriaIngrediente) && !isNaN(cantidadUsada)) {
                        if (unidadIngrediente === 'mjo' || unidadIngrediente === 'pz') {
                            unidad = 1;
                        } else {
                            unidad = 100;
                        }
                        const caloriasTotalesIngrediente = (cantidadUsada * caloriaIngrediente) / unidad;
                        totalCalorias += caloriasTotalesIngrediente;
                    } else {
                        console.error("Datos inválidos para el cálculo de calorías", { caloriaIngrediente, cantidadUsada });
                    }
                }
                setCaloriasReceta(totalCalorias);
            } catch (error) {
                console.error(error);
            }
        };

        if (ingredientesReceta.length > 0) {
            fetchCaloriasIngredientes();
        }
    }, [ingredientesReceta]);

    const obtenerCantidadIngrediente = (ingredienteUsuarioCorrespondienteCantidad, recetaCantidad) => {
        return ingredienteUsuarioCorrespondienteCantidad - recetaCantidad;
    };

    const eliminacionIngrediente = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/ingrediente/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ usuario: { correo: currentUser } }),
            });
    
            if (!response.ok) {
                throw new Error('No se pudo eliminar el ingrediente del usuario');
            }
    
            const data = await response.json();
            fetchIngredientesUsuario();
        } catch (error) {
            console.error(error);
        }
    };
    

    const actualizarCantidadIngrediente = async (ingredientesUsuario, ingredientesReceta) => {
        for (const receta of ingredientesReceta) {
            const ingredienteUsuarioCorrespondiente = ingredientesUsuario.find(u => u.idingrediente === receta.idingrediente);
            if (ingredienteUsuarioCorrespondiente) {
                const cantidadRestante = obtenerCantidadIngrediente(ingredienteUsuarioCorrespondiente.cantidad, receta.cantidad);
                if(cantidadRestante===0){
                    eliminacionIngrediente(ingredienteUsuarioCorrespondiente.idingrediente);
                }else{
                    try {
                        const response = await fetch('http://localhost:3001/ingrediente/editar', {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                idIngrediente: ingredienteUsuarioCorrespondiente.idingrediente,
                            cantidad: parseInt(cantidadRestante),
                            unidad: ingredienteUsuarioCorrespondiente.unidad,
                            usuario: { correo: currentUser }
                        }),
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(`Error: ${errorData.message}`);
                    }
                    } catch (error) {
                        console.error('Error al actualizar la cantidad de los ingredientes:', error);
                        alert('Error al actualizar la cantidad de los ingredientes: ' + error.message);
                    }
                }
            }
        }
        fetchIngredientesUsuario();
    };

    const sendCaloriasRecetaCocinada = async () => {
        if (caloriasReceta === 0) return;
        try {
            const response = await fetch('http://localhost:3001/receta/cocinar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idReceta: idRecipe, correo: currentUser, calorias: caloriasReceta }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${errorData.message}`);
            }

            const data = await response.json();
        } catch (error) {
            console.error('Error al enviar las calorías totales de la receta:', error);
        }
    };

    const handleChangeCookedValue = async () => {
        setCooked(true);
        setEnableCooked(false);
        setButtonDisabled(true);
        console.log('Ingredientes Usuario:', JSON.stringify(ingredientesUsuario, null, 2));
        console.log('Ingredientes Receta:', JSON.stringify(ingredientesReceta, null, 2));
        console.log(`Calorías totales de la receta: ${caloriasReceta}`);
        await sendCaloriasRecetaCocinada();
        await actualizarCantidadIngrediente(ingredientesUsuario, ingredientesReceta);
    };

    return (
        <Box style={style}>
            {enableCooked && (
                <Tooltip title="Marcar la receta como cocinada" placement="bottom">
                {!buttonDisabled ? (
                    <IconButton
                        onClick={handleChangeCookedValue}
                        size="large"
                        disabled={buttonDisabled}
                        sx={{  
                            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.7)',
                            borderRadius: '90px',
                            transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
                            '&:hover': {
                                backgroundColor: 'rgba(249, 84, 99 , 0.6)',
                                transform: 'scale(1.1)',
                            },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        aria-label="cooked recipe"
                    >
                        <DinnerDiningRoundedIcon sx={{fontSize:60}}/>
                    </IconButton>
                ) : (
                    <IconButton
                        component="label"
                        size="large"
                        disabled={buttonDisabled}
                        sx={{  
                            '&:disabled': {
                                backgroundColor: 'rgba(249, 84, 99 , 1)',
                                cursor: 'not-allowed',
                            },
                            cursor: 'not-allowed',
                            borderRadius:'100px',  
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column', // Asegura que los elementos se apilen verticalmente
                        }}
                        tabIndex={-1}
                    >
                        <DinnerDiningRoundedIcon sx={{ color: 'rgba(249, 84, 99 , 1)', fontSize: 60 }} />
                        <Typography sx={{ color: 'rgba(249, 84, 99 , 1)', fontSize: 15 }}> {/* Ajusta el tamaño del texto */}
                            Receta Cocinada
                        </Typography>
                    </IconButton>    
                )}
            </Tooltip>
            
        )}
        </Box>
    );
}

export default CookedRecipeButton;

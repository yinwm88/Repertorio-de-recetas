import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import { useAuth } from '../../AuthContext';

function CookedRecipeButton({ idRecipe }) {
    const { currentUser } = useAuth();

    const [enableCooked, setEnableCooked] = useState(false);
    const [disableCooked, setDisableCooked] = useState(false);
    const [cooked, setCooked] = useState(false);

    const [ingredientesReceta, setIngredientesReceta] = useState([]);
    const [ingredientesUsuario, setIngredientesUsuario] = useState([]);
    
    // Ingredientes Usuario
    useEffect(() => {
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
        fetchIngredientesUsuario();
    }, [currentUser]);

    // Ingredientes Receta
    useEffect(() => {
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
        fetchIngredientesReceta();
    }, [idRecipe]);   

    useEffect(() => {
        if (ingredientesReceta.length && ingredientesUsuario.length) {
            const tieneTodos = ingredientesReceta.every(ingredienteReceta => {
                const ingredienteUsuario = ingredientesUsuario.find(ing => ing.idingrediente === ingredienteReceta.idingrediente);
                return ingredienteUsuario && Number(ingredienteUsuario.cantidad) >= Number(ingredienteReceta.cantidad);
            });
            setEnableCooked(tieneTodos);
            setDisableCooked(!tieneTodos);

        }
    }, [ingredientesReceta, ingredientesUsuario]);


    const [caloriasReceta, setCaloriasReceta] = useState(0);

     // Cálculo de Calorías
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
                    console.log('Ingrediente:', JSON.stringify(dataIngrediente, null, 2));

                    const caloriaIngrediente = Number(dataIngrediente.calorias);
                    const cantidadUsada = Number(ingrediente.cantidad);

                    if (!isNaN(caloriaIngrediente) && !isNaN(cantidadUsada)) {
                        const caloriasTotalesIngrediente = (cantidadUsada * caloriaIngrediente) /1;
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



    // indicar al back que se cocino una receta
    const sendCaloriasRecetaCocinada = async () =>{
        if(caloriasReceta===0)return;
        try{
            const response = await fetch('http://localhost:3001/receta/cocinar', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ idReceta:idRecipe, correo:currentUser, calorias:caloriasReceta }),
                });

                if (!response.ok) {
                    throw new Error('No se pudo enviar las calorias totales de la receta');
                }

                const data = await response.json();
            } catch (error) {
                console.error(error);
            }
    }


    const handleChangeCookedValue = () => {
        setCooked(true);
        setEnableCooked(false);
        console.log(`Calorías totales de la receta: ${caloriasReceta}`);
        sendCaloriasRecetaCocinada();
        // eliminar la cantidad de ingredientes del usuario que ocupe la receta  -> editar la cantidad de cada ingrediente del usuario 
    };

    return (
        <div>
            {enableCooked && (
                <Tooltip title="Marcar la receta como cocinada" placement="top">
                    <IconButton
                        onClick={handleChangeCookedValue}
                        sx={{
                            marginTop: '10px',
                            marginLeft: '470px',
                            width: '125px',
                            height: '125px',
                            backgroundColor: 'rgba(247, 247, 247 , 0.6)',
                            boxShadow: '0 15px 25px rgba(0, 0, 0, 0.7)',
                            borderRadius: '90px',
                            transition: 'background-color 0.3s, transform 0.3s',
                            transform: cooked ? 'scale(0.5.1)' : 'scale(1)',
                            '&:hover': {
                                backgroundColor: 'rgba(249, 84, 99 , 0.5)',
                                transform: 'scale(1.1)',
                            },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        aria-label="cooked recipe"
                    >
                        <DiningOutlinedIcon sx={{ fontSize: 80 }} />
                    </IconButton>
                </Tooltip>
            )}
            {disableCooked&& (
                <IconButton
                    disabled
                    sx={{
                        marginTop: '10px',
                        marginLeft: '470px',
                        width: '125px',
                        height: '125px',
                        boxShadow: '0 15px 25px rgba(0, 0, 0, 0.7)',
                        borderRadius: '90px',
                    }}
                    aria-label="cooked recipe"
                >
                    <DiningOutlinedIcon sx={{ fontSize: 80 }} />
                </IconButton>
            )}
            {!enableCooked && !disableCooked && (
                <Box
                    sx={{
                        marginTop: '10px',
                        marginLeft: '470px',
                        width: '125px',
                        height: '125px',
                        backgroundColor:  'rgba(249, 84, 99 , 1)',
                        boxShadow: '0 15px 25px rgba(0, 0, 0, 0.7)',
                        borderRadius: '90px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    aria-label="cooked recipe"
                >
                    <DiningOutlinedIcon sx={{ fontSize: 80 }} />
                </Box>
            )}
        </div>
    );
}

export default CookedRecipeButton;

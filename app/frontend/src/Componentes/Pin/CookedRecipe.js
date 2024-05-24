import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import { useAuth } from '../../AuthContext';

function CookedRecipeButton({ idRecipe }) {
    const { currentUser } = useAuth();

    const [enableCooked, setEnableCooked] = useState(false);
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
        console.log('Ingredientes Receta:', JSON.stringify(ingredientesReceta, null, 2));
        console.log('Ingredientes Usuario:', JSON.stringify(ingredientesUsuario, null, 2));
        
        if (ingredientesReceta.length && ingredientesUsuario.length) {
            const tieneTodos = ingredientesReceta.every(ingredienteReceta => {
                const ingredienteUsuario = ingredientesUsuario.find(ing => ing.idingrediente === ingredienteReceta.idingrediente);
                return ingredienteUsuario && Number(ingredienteUsuario.cantidad) >= Number(ingredienteReceta.cantidad);
            });
            setEnableCooked(tieneTodos);
        }
    }, [ingredientesReceta, ingredientesUsuario]);

    const handleChangeCookedValue = () => {
        setCooked(!cooked);
        // lógica para eliminar los ingredientes de la receta y obtener las calorías
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
                            backgroundColor: cooked ? 'rgba(249, 84, 99 , 1)' : 'rgba(247, 247, 247 , 0.6)',
                            boxShadow: '0 15px 25px rgba(0, 0, 0, 0.7)',
                            borderRadius: '90px',
                            transition: 'background-color 0.3s, transform 0.3s',
                            transform: cooked ? 'scale(0.5.1)' : 'scale(1)',
                            '&:hover': {
                                backgroundColor: 'rgba(249, 84, 99 , 0.5)',
                                transform: 'scale(1.1)',
                            },
                        }}
                        aria-label="cooked recipe"
                    >
                        <DiningOutlinedIcon sx={{ fontSize: 80 }} />
                    </IconButton>
                </Tooltip>
            )}
            {!enableCooked && (
                <IconButton
                    disabled
                    sx={{
                        marginTop: '10px',
                        marginLeft: '470px',
                        width: '125px',
                        height: '125px',
                        backgroundColor: cooked ? 'rgba(249, 84, 99 , 1)' : 'rgba(247, 247, 247 , 0.6)',
                        boxShadow: '0 15px 25px rgba(0, 0, 0, 0.7)',
                        borderRadius: '90px',
                        transition: 'background-color 0.3s, transform 0.3s',
                        transform: cooked ? 'scale(0.5.1)' : 'scale(1)',
                        '&:hover': {
                            backgroundColor: 'rgba(249, 84, 99 , 0.5)',
                            transform: 'scale(1.1)',
                        },
                    }}
                    aria-label="cooked recipe"
                >
                    <DiningOutlinedIcon sx={{ fontSize: 80 }} />
                </IconButton>
            )}
        </div>
    );
}

export default CookedRecipeButton;

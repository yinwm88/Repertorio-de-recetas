import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Swal from 'sweetalert2';
import { useAuth } from '../../AuthContext';

const Lista = ({ idReceta }) => {
    const { currentUser, getToken } = useAuth();

    const handleCrearLista = async () => {
        try {
        const token = await getToken(); 
        const response = await fetch('http://localhost:3001/receta/crearLista', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify({
                correo: currentUser, 
                idReceta: idReceta
            }),
        });

        if (!response.ok) {
            throw new Error('No se pudo crear la lista');
        }

        Swal.fire({
            text: 'Lista generada exitosamente!',
            icon: 'success',
        });
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <Tooltip title="Generar lista de ingredientes" placement="right">
        <IconButton
            onClick={handleCrearLista}
            size="small"
            aria-label="generar lista"
            sx={{
            backgroundColor: 'rgba(0, 0, 0 , 1)',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.7)',
            transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
            borderRadius: '2px', 
            '&:hover': {
                backgroundColor: 'rgba(249, 84, 99 , 0.9)',
                transform: 'scale(1.1)',
            },
            }}
        >
            <FormatListNumberedRoundedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        </Tooltip>
    );
};

export default Lista;

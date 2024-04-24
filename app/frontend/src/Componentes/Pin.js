import React, { useState, useEffect } from "react";
import { IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'; import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import { translate } from '@vitalets/google-translate-api';

import { db } from '../firebaseConfig';


const fetchRecetaPorNombre = async (nombreReceta) => {

    // const translation = await translate(nombreReceta, { to: 'en' });
    //   const nombreRecetaEnIngles = translation.text;


    const recetasRef = db.ref('recetas');
    try {
        const snapshot = await recetasRef.orderByChild('title').equalTo(nombreReceta).once('value');
        if (snapshot.exists()) {
            const recetas = snapshot.val();
            const recetasArray = Object.keys(recetas).map(key => ({
                id: key,
                ...recetas[key],
            }));
            // console.log(recetasArray);
            return recetasArray;
        } else {
            console.log('No se encontraron recetas con ese nombre');
            return [];
        }
    } catch (error) {
        console.error('Error al buscar la receta:', error);
        throw error;
    }
};

fetchRecetaPorNombre('stuffed tomatoes').then(recetas => {
    console.log('RRRRecetas encontradas:', recetas);
}).catch(error => {
    console.error(error);
}
);

function Pin({ id, pinSize, imgSrc, name, link, onMarkFavorite, recipeDetails }) {
    const [favorita, setFavorita] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false); // Nuevo estado para controlar el modal de edición
    const [showEditButton, setShowEditButton] = useState(false);
    const [nombreEditado, setNombreEditado] = useState(name);
    const [procesoEditado, setProcesoEditado] = useState(recipeDetails ? recipeDetails.proceso : '');
    
    const handleSaveChanges = async () => {
        const recetaEditada = {
            idReceta: id,
            nombre: nombreEditado,
            proceso: procesoEditado,
            usuario: {
                correo: "joselopbau27@gmail.com" // Puedes cambiar esto por el correo del usuario actual
            }
        };

        try {
            const response = await fetch('http://localhost:3001/editar/crearReceta', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(recetaEditada)
            });

            if (response.ok) {
                console.log('Receta editada y enviada correctamente');
            } else {
                console.error('Error al editar la receta:', response.statusText);
            }
        } catch (error) {
            console.error('Error al editar la receta:', error);
        }

        handleCloseEditModal();
    };

    const handleClick = (e) => {
        e.stopPropagation();
        setFavorita(!favorita);
        onMarkFavorite(id);
    };

    const handleOpenDialog = () => {
        if (!openDialog) {
            setOpenDialog(true);
        }
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleOpenEditModal = () => { // Función para abrir el modal de edición
        setOpenEditModal(true);
    };

    const handleCloseEditModal = () => { // Función para cerrar el modal de edición
        setOpenEditModal(false);
    };

    const handleMouseEnter = () => {
        setShowEditButton(true);
    };

    const handleMouseLeave = () => {
        setShowEditButton(false);
    };

    const [editOption, setEditOption] = useState('recipeDetails');

    useEffect(() => {
        // Cerrar el modal del pin cada vez que se cierre el modal de edición
        if (!openEditModal) {
            setOpenDialog(false);
        }
    }, [openEditModal]);


    return (
        <div className={`pin ${pinSize}`} onClick={!openEditModal ? handleOpenDialog : null} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
           
            <div className="edit" style={{ display: showEditButton ? 'block' : 'none' }}>
                <IconButton className="editIcon" style={{ position: 'absolute', top: '3px', left: '3px', backgroundColor: 'yellowgreen', '&:hover': { backgroundColor: 'lightgreen' }}} onClick={(e) => {
                    e.stopPropagation(); // Detiene la propagación del evento
                    handleOpenEditModal(); // Abre el modal de edición
                }}>
                    <EditIcon />
                </IconButton>
            </div>

            <img className="mainPic" src={imgSrc} alt={name} />
            <div className="contenido">
                <div className="nombreReceta">
                    {name}
                </div>
                <IconButton className="fav" onClick={(e) => handleClick(e)}>
                    {favorita ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
            </div>
            
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md" fullWidth>
                <DialogTitle>{name}</DialogTitle>
                <DialogContent>
                    <div style={{ overflow: 'hidden', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={imgSrc} alt={`Detalle de ${name}`} style={{ width: '100%', objectFit: 'cover' }} />
                    </div>
                    <DialogContentText>
                        {recipeDetails && recipeDetails.proceso ? recipeDetails.proceso : "Detalles no disponibles"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cerrar</Button>
                </DialogActions>
            </Dialog>

                {/* MODAL DE EDICIOM */}
            <Dialog open={openEditModal} onClose={handleCloseEditModal} maxWidth="md" fullWidth> 
                <DialogTitle>Editar Receta</DialogTitle>
                
                <DialogContent>
        <FormControl fullWidth margin="normal">
            <InputLabel id="edit-option-label">¿Qué desea editar?</InputLabel>
            <Select
                labelId="edit-option-label"
                id="edit-option"
                value={editOption}
                onChange={(e) => setEditOption(e.target.value)}
                fullWidth
            >
                <MenuItem value="name" disabled={editOption === 'recipeDetails'}>Nombre</MenuItem>
                <MenuItem value="recipeDetails">Detalles de la Receta</MenuItem>
            </Select>
        </FormControl>

        {/* Campos de entrada para editar el nombre de la receta */}
        {editOption === 'name' && (
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="recipe-name">Nuevo Nombre de la Receta</InputLabel>
                <TextField
                    id="recipe-name"
                    type="text"
                    value={nombreEditado}
                    onChange={(e) => setNombreEditado(e.target.value)}
                    fullWidth
                />
            </FormControl>
        )}

        {/* Campos de entrada para editar los detalles de la receta */}
        {editOption === 'recipeDetails' && (
            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="recipe-details">Nuevos Detalles de la Receta</InputLabel>
                <TextField
                     id="recipe-details"
                     multiline
                     rows={4}
                     value={procesoEditado}
                     onChange={(e) => setProcesoEditado(e.target.value)}
                     fullWidth
                />
            </FormControl>
        )}

    </DialogContent>
    <DialogActions>
        <Button onClick={handleCloseEditModal}>Cancelar</Button>
        <Button onClick={handleSaveChanges} color="primary">Guardar</Button>
    </DialogActions>
</Dialog>
        </div>
    );
}

export default Pin;

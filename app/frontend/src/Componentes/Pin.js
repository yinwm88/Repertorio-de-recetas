import React, { useState, useEffect } from "react";
import { IconButton, Dialog, DialogTitle, Typography,DialogContent, DialogContentText, DialogActions, Button, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'; import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import { translate } from '@vitalets/google-translate-api';
import { useAuth } from '../AuthContext';

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
    const auth = useAuth();
    const userEmail = auth.user ? auth.user.email : '';
    const { currentUser } = useAuth();

    const [formData, setFormData]=useState({
        idReceta:id,
        usuario: userEmail,
        nombre:name,
        tiempo: '',
        proceso:recipeDetails,
        ingredientes:''
    })
   
    const [favorita, setFavorita] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false); 
    const [showEditButton, setShowEditButton] = useState(false);
    
    const [nombreEditado, setNombre] = useState(name);
    const [procesoEditado, setProceso] = useState(recipeDetails ? recipeDetails.proceso : '');
    const [tiempoEditado, setTiempo] = useState('');
    const [ingredientesEditados, setIngredientes] = useState('');

    const [editOption, setEditOption] = useState('');

    const handleSaveChanges = async () => {
       const formBody = [];

        // Añadir campos del formulario a formBody.
        formBody.push(`id=${encodeURIComponent(id)}`);
        formBody.push(`nombre=${encodeURIComponent(nombreEditado)}`);
        formBody.push(`tiempo=${encodeURIComponent(tiempoEditado)}`);
        formBody.push(`proceso=${encodeURIComponent(procesoEditado)}`);
        // Añadir ingredientes a formBody.
        formBody.push(`usuario[correo]=${encodeURIComponent(currentUser || '')}`);

        try {
            const response = await fetch('http://localhost:3001/receta/editarReceta',{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                  },
                body: formBody.join("&"),
            });

            let data;
            try {
              data = await response.json();
            } catch (error) {
              // Si la respuesta no es JSON, manejar el error o establecer un mensaje predeterminado
              console.error('No se recibió un JSON válido:', error);
            }

            if (response.ok) {
                alert(data.message || 'Receta editada y enviada correctamente');
                console.log('Datos de receta editados', data)
            } else {
                alert(data.message || 'Hubo un problema al crear la receta. Por favor, intenta nuevamente.');
            }

        } catch (error) {
            console.error('Error al editar la receta:', error);
            alert('Hubo un error al crear la receta. Por favor, inténtalo nuevamente más tarde.');
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

    const handleOpenEditModal = () => { 
        setOpenEditModal(true);
    };

    const handleCloseEditModal = () => { 
        setOpenEditModal(false);
    };

    const handleMouseEnter = () => {
        setShowEditButton(true);
    };

    const handleMouseLeave = () => {
        setShowEditButton(false);
    };

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
                    e.stopPropagation();
                    handleOpenEditModal(); 
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
                <DialogTitle style={{ textAlign: 'center' }}>Editando {name} </DialogTitle>
                
                <DialogContent>
                    <FormControl fullWidth margin="normal">
                    <InputLabel id="edit-option-label">¿Qué deseas editar de la receta?</InputLabel>
                        <Select
                            labelId="edit-option-label"
                            id="edit-option"
                            value={editOption}
                            onChange={(e) => setEditOption(e.target.value)}
                            fullWidth
                        >
                            <MenuItem value="name" disabled={editOption === 'recipeDetails'}>Nombre de la receta</MenuItem>
                            <MenuItem value="recipeDetails">Procedimiento</MenuItem>
                            <MenuItem value="tiempo">Tiempo de preparacion</MenuItem>
                            <MenuItem value="ingredientes">Lista de ingredientes</MenuItem>

                        </Select>
                    </FormControl>

                    {/* Campos de entrada para editar el nombre de la receta */}
                    {editOption === 'name' && (
                        <>
                            <Typography variant="subtitle1" gutterBottom>Nuevo Nombre de la Receta</Typography>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    id="recipe-name"
                                    type="text"
                                    value={nombreEditado}
                                    onChange={(e) => setNombre(e.target.value)}
                                    fullWidth
                                    />
                            </FormControl>
                        </>
                    )}

                    {/* Campos de entrada para editar los detalles de la receta */}
                    {editOption === 'recipeDetails' && (
                        <>
                            <Typography variant="subtitle1" gutterBottom>Nuevos Detalles de la Receta</Typography>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    id="recipe-details"
                                    multiline
                                    rows={4}
                                    value={procesoEditado}
                                    onChange={(e) => setProceso(e.target.value)}
                                    fullWidth
                                    />
                            </FormControl>
                        </>
                    )}

                    {/* Campos de entrada para editar el tiempo de la receta */}
                    {editOption === 'tiempo' && (
                        <>
                            <Typography variant="subtitle1" gutterBottom>Nuevo Tiempo de preparacion</Typography>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    id="tiempo"
                                    multiline
                                    rows={4}
                                    value={tiempoEditado}
                                    onChange={(e) => setTiempo(e.target.value)}
                                    fullWidth
                                    />
                            </FormControl>
                        </>
                    )}

                    {/* Campos de entrada para editar lis ingredientes de la receta*/}
                    {editOption === 'ingredientes' && (
                        <>
                            <Typography variant="subtitle1" gutterBottom>Nueva lista de ingredientes</Typography>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    id="ingredientes"
                                    multiline
                                    rows={4}
                                    value={ingredientesEditados}
                                    onChange={(e) => setIngredientes(e.target.value)}
                                    fullWidth
                                    />
                            </FormControl>
                        </>
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

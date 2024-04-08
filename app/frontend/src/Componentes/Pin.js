import React from "react";
import { IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { translate } from '@vitalets/google-translate-api';

import { db } from '../firebaseConfig';

const fetchRecetaPorNombre = async (nombreReceta) => {

    const translation = await translate(nombreReceta, { to: 'en' });
    const nombreRecetaEnIngles = translation.text;


    const recetasRef = db.ref('recetas');
    try {
        const snapshot = await recetasRef.orderByChild('title').equalTo(nombreRecetaEnIngles).once('value');
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

fetchRecetaPorNombre('Cacio e pepe').then(recetas => {
    console.log('RRRRecetas encontradas:', recetas);
}).catch(error => {
    console.error(error);
}
);

function Pin({ id, pinSize, imgSrc, name, link, onMarkFavorite, recipeDetails }) {
    const [favorita, setFavorita] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);


    // fetchRecetaPorNombre(name).then(recetas => {
    //     console.log('Recetas encontradas:', recetas);
    // }).catch(error => {
    //     console.error(error);
    // });

    const handleClick = (e) => {
        e.stopPropagation(); // Esto detiene la propagación del evento.
        setFavorita(!favorita);
        onMarkFavorite(id);
    };



    const handleOpenDialog = () => {
        if (!openDialog) {
            console.log('Abriendo dialogo');
            setOpenDialog(true);
        }
    };
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


    return (
        <div className={`pin ${pinSize}`} onClick={handleOpenDialog}>
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
        </div>
    );
}
export default Pin;
import React, { useState } from "react";
import { IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import { translate } from '@vitalets/google-translate-api';

import { db } from '../firebaseConfig';

const fetchRecetaPorNombre = async (nombreReceta) => {
    // Código omitido para mayor claridad
};

function Pin({ id, pinSize, imgSrc, name, link, onMarkFavorite, recipeDetails }) {
    const [favorita, setFavorita] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [showEditButton, setShowEditButton] = useState(false);

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

    const handleMouseEnter = () => {
        setShowEditButton(true);
    };

    const handleMouseLeave = () => {
        setShowEditButton(false);
    };

    return (
        <div className={`pin ${pinSize}`} onClick={handleOpenDialog} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="edit" style={{ display: showEditButton ? 'block' : 'none' }}>
                <IconButton className="editIcon" style={{ position: 'absolute', top: '3px', left: '3px', backgroundColor: 'yellowgreen', '&:hover': { backgroundColor: 'lightgreen' }}} onClick={(e) => e.stopPropagation()}>
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
        </div>
    );
}

export default Pin;

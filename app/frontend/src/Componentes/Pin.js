import React, { useState } from "react";
import {
    IconButton
} from "@mui/material";

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";

import EditRecipeModal from "./Pin/EditRecipeModal";
import RecipeDetailsDialog from "./Pin/RecipeDetailsDialog";
import RecipeCard from "./Pin/RecipeCard";

import { useAuth } from "../AuthContext";

function Pin({ id, pinSize, imgSrc, name, onMarkFavorite, recipeDetails, porcentaje }) {

    

    const { currentUser, getToken } = useAuth();

    const [favorita, setFavorita] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [editOption, setEditOption] = useState("name");
    const [nombreEditado, setNombre] = useState(name);
    const [procesoEditado, setProceso] = useState(
        recipeDetails ? recipeDetails.proceso : ""
    );
    const [tiempoEditado, setTiempo] = useState("");
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const handleClick = (e) => {
        e.stopPropagation();
        setFavorita(!favorita);
        onMarkFavorite(id);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true)
        console.log('open dialog')
    };
    const handleCloseDialog = () => {
        setOpenDialog(false)

    };

    const handleOpenEditModal = (e) => {
        e.stopPropagation();
        setOpenEditModal(true);
    };
    const handleCloseEditModal = () => setOpenEditModal(false);

    const fetchIngredients = async (text) => {
        if (!text.trim()) {
            setSearchResults([]);
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/ingrediente/buscar`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ingrediente: text }),
            });
            const data = await response.json();
            if (response.ok) {
                if (Array.isArray(data.ingredientes)) {
                    setSearchResults(data.ingredientes);
                } else {
                    setSearchResults([]);
                }
            } else {
                console.error('Error buscando ingredientes:', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSaveChanges = async () => {
        const body = {
            idReceta: id,
            nombre: nombreEditado,
            tiempo: tiempoEditado,
            proceso: procesoEditado,
            ingredientes: selectedIngredients.map(ingrediente => ({
                idIngrediente: ingrediente.idingrediente,
                cantidad: ingrediente.cantidad,
            })),
            usuario: {
                correo: currentUser || '',
            },
        };

        try {
            const response = await fetch('http://localhost:3001/receta/editarReceta', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken()}`,
                },
                body: JSON.stringify(body),
            });
            let data;
            try {
                data = await response.json();
            } catch (error) {
                console.error('No se recibió un JSON válido:', error);
            }

            if (response.ok) {
                alert(data.message || 'Receta editada y enviada correctamente');
                console.log('Datos de receta editados', data);
            } else {
                alert(data.message || 'Hubo un problema al editar la receta. Por favor, intenta nuevamente.');
            }
        } catch (error) {
            console.error('Error al editar la receta:', error);
            alert('Hubo un error al crear la receta. Por favor, inténtalo nuevamente más tarde.');
        }

        handleCloseEditModal();
    };

    return (
        <div className={`pin ${pinSize}`} >
            <RecipeCard
                imgSrc={imgSrc}
                name={name}
                favorita={favorita}
                onToggleFavorite={handleClick}
                onEditClick={handleOpenEditModal}
                onClick={!openEditModal ? handleOpenDialog : null}
                porcentaje={porcentaje}
            />

            <RecipeDetailsDialog
                open={openDialog}
                handleClose={handleCloseDialog}
                name={name}
                imgSrc={imgSrc}
                recipeDetails={recipeDetails}
            />

            <EditRecipeModal
                open={openEditModal}
                handleClose={handleCloseEditModal}
                handleSaveChanges={handleSaveChanges}
                nombreEditado={nombreEditado}
                setNombre={setNombre}
                procesoEditado={procesoEditado}
                setProceso={setProceso}
                tiempoEditado={tiempoEditado}
                setTiempo={setTiempo}
                searchText={searchText}
                setSearchText={setSearchText}
                searchResults={searchResults}
                fetchIngredients={fetchIngredients}
                selectedIngredients={selectedIngredients}
                setSelectedIngredients={setSelectedIngredients}
                editOption={editOption}
                setEditOption={setEditOption}
                setSearchResults={setSearchResults}
            />
        </div>
    );
}

export default Pin;

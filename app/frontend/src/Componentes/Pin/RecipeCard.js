import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import Heart from "react-animated-heart";
import "./RecipeCard.css";

const RecipeCard = ({
    imgSrc,
    name,
    favorita,
    onToggleFavorite,
    onEditClick,
    onClick,
    porcentaje,
    editable
}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleDelete = (event) => {
        event.stopPropagation();
        console.log("Delete action triggered");
        handleMenuClose();
    };

    const handleEdit = (event) => {
        event.stopPropagation();
        onEditClick(event);
        handleMenuClose();
    };

    return (
        porcentaje > 0 ?
            <div className="recipe-card" style={{ display: "flex", position: "relative" }} onClick={onClick}>
                {editable ? <IconButton
                    className="editIcon"
                    style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        backgroundColor: "white",
                        zIndex: 10
                    }}
                    onClick={handleMenuOpen}
                >
                    <MoreVertIcon />
                </IconButton> : null}


                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleMenuClose}
                    onClick={(event) => event.stopPropagation()} // Evita que el menú cierre el contenedor principal
                >
                    <MenuItem onClick={handleEdit}>
                        <EditIcon /> Edit
                    </MenuItem>
                    <MenuItem onClick={handleDelete}>
                        <DeleteIcon /> Delete
                    </MenuItem>
                </Menu>


                <div className="progressBar" style={{
                    width: `${porcentaje}%`,
                    zIndex: 1,
                    background: 'rgb(252, 176, 69)',
                    backgroundImage: 'linear-gradient(90deg, rgb(252, 176, 69) 0%, rgb(252, 118, 118) 100%)',
                    boxShadow: '-1px 0px 15px #767676',
                }}></div>
                <div className="progressBarBack"></div>

                <img className="mainPic" src={imgSrc} alt={name} />
                <div className="contenido">
                    <div className="nombreReceta">
                        {name.length > 25 ? name.charAt(0).toUpperCase() + name.slice(1, 30) + '...' : name}
                    </div>
                    <Heart isClick={favorita} onClick={(event) => { event.stopPropagation(); onToggleFavorite(event); }} />
                </div>
            </div>
            : null
    );
};

export default RecipeCard;

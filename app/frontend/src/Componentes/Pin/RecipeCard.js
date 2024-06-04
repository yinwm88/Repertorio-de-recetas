import React, { useState } from "react";
import { IconButton, Menu, MenuItem, LinearProgress, Box, Chip } from "@mui/material";
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
    editable,
    handleDeleteRecipe
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
        handleDeleteRecipe(event);
        handleMenuClose();
    };

    const handleEdit = (event) => {
        event.stopPropagation();
        onEditClick(event);
        handleMenuClose();
    };

    const getChipColor = (percentage) => {
        const red = Math.floor(255 - 0.8 * percentage);
        const green = Math.floor(180 + 0.8 * percentage);
        const blue = Math.floor(200 + 0.4 * percentage);
        return `rgb(${red}, ${green}, ${blue}, 0.7)`;
      };

    const getChipTextColor = (percentage) => {
        const getColorComponent = (percentage, isActive) => {
            const range = isActive ? [0, 100] : [0, 200]; // Nuevo rango para los valores activos
            const value = Math.floor(range[1] * (1 - percentage / 100));
            return value;
        };

        const red = getColorComponent(percentage, false);
        const green = getColorComponent(percentage, true);
        const blue = getColorComponent(percentage, false);

        return `rgb(${red}, ${green}, ${blue})`;
    };

    return (
        <div className={`recipe-card ${porcentaje >= 100 ? 'shine-gold' : ''}`} onClick={onClick}>
            {editable ? (
                <IconButton
                    sx={{
                        position: "absolute",
                        top: "5%",
                        right: "10px",
                        backgroundColor: "#ffffff38",
                        '&:hover': {
                            backgroundColor: "white",
                        }
                    }}
                    onClick={handleMenuOpen}
                >
                    <MoreVertIcon />
                </IconButton>
            ) : null}

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                onClick={(event) => event.stopPropagation()} 
            >
                <MenuItem onClick={handleEdit}>
                    <EditIcon /> Edit
                </MenuItem>
                <MenuItem onClick={handleDelete}>
                    <DeleteIcon /> Delete
                </MenuItem>
            </Menu>

            <Box className="progressBarContainer">
                <LinearProgress
                    variant="determinate"
                    value={porcentaje}
                    className="progressBar"
                    sx={{ height: 10 }}
                />
            </Box>
            <Chip
                label={`${parseInt(porcentaje)}%`}
                className="progressChip"
                style={{
                    color: getChipTextColor(porcentaje),
                    backgroundColor: getChipColor(porcentaje),
                    fontSize: '15px',
                    padding: '5px',
                    backdropFilter: 'blur(5px)',
                }}
            />
            <img className="mainPic" src={imgSrc} alt={name} />
            <div className="contenido">
                <div className="nombreReceta">
                    {name.length > 25 ? name.charAt(0).toUpperCase() + name.slice(1, 30) + '...' : name}
                </div>
                <Heart isClick={favorita} onClick={(event) => { event.stopPropagation(); onToggleFavorite(event); }} />
            </div>
        </div>
    );
};

export default RecipeCard;

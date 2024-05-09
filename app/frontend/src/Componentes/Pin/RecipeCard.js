import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./RecipeCard.css";
import Heart from "react-animated-heart";


const RecipeCard = ({
    imgSrc,
    name,
    favorita,
    onToggleFavorite,
    onEditClick,
    onClick,
    porcentaje
}) => {
    return (
        porcentaje > 0 ?
            <div className="recipe-card" style={{ display: "flex", position: "relative" }} onClick={onClick}>
                <IconButton
                    className="editIcon"
                    style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        backgroundColor: "white",
                        zIndex: 10
                    }}
                    onClick={onEditClick}
                >
                    <EditIcon />
                </IconButton>

                <div className="progressBar" style={{
                    width: porcentaje,
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
                    <Heart isClick={favorita} onClick={onToggleFavorite} />
                    {/* <IconButton className="fav" onClick={onToggleFavorite}>
                        {favorita ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton> */}
                </div>
            </div>
            : null
    );
};

export default RecipeCard;

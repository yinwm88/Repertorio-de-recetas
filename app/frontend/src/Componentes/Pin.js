import React from "react";
import { IconButton } from '@mui/material';
import{ useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Pin({pinSize, imgSrc, name, link, }){
    const [favorita, setFavorita] = useState(false);

    const handleClick = () => {
        setFavorita(!favorita);
    };

    return <div className={`pin ${pinSize}`}>
        <img className="mainPic" src={imgSrc} alt="">
        </img>
        <div className="contenido">
            <div className="nombreReceta">
                {name}
            </div>
            <a href={link}></a>
            <div >
                 <IconButton  className="fav" onClick={handleClick}>
                {favorita ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
            </div>
        </div>
    </div>
}
export default Pin;
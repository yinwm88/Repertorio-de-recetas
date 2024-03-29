import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import './LP.css';
import Ingreso from './Ingreso';
import foodimg1 from './imagesLP/dessert03.jpg';
import foodimg2 from './imagesLP/food9.jpg';
import foodimg3 from './imagesLP/veganfood.jpg';
import foodimg5 from './imagesLP/food1.jpg'
import foodimg4 from './imagesLP/veganfood01.webp'
import foodimg6 from './imagesLP/food3.jpg'
import foodimg7 from './imagesLP/food10.jpg'
import foodimg8 from './imagesLP/food5.jpg'
import zIndex from '@mui/material/styles/zIndex';


const Header = () => {
    const [currentImage, setCurrentImage] = useState(foodimg1);

    const images = [foodimg1, foodimg2, foodimg3, foodimg4, foodimg5, foodimg6, foodimg7, foodimg8];

    useEffect(() => {

        const interval = setInterval(() => {
            const nextIndex = (images.indexOf(currentImage) + 1) % images.length;

            setCurrentImage(images[nextIndex]);
        }, 1400);

        return () => clearInterval(interval);
    }, [currentImage, images]);

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%', 
                height: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                overflow: 'hidden',
            }}
            className="header"
        >

            <Box sx={{
                zIndex: 1,
                flex: 1,
                marginTop: { xs: '200px', md: '0px' },
                paddingTop: { xs: '20px', md: '10px' },
                marginLeft: { xs: '0', md: '10px' },
                textAlign: { xs: 'center', md: 'left' },
                
            }}>
                <Typography sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center' }}>
                    Recetas Ideales para tu Cocina
                </Typography>
                <Typography sx={{ fontSize: { xs: '3rem', md: '4rem' }, textAlign: 'center' }}>
                    Sé tu propio Chef
                </Typography>
                <Typography sx={{ fontSize: { xs: '1.7rem', md: '2.1rem' }, textAlign: 'center' }}>
                    ¿Quieres recetas ya?
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Ingreso />
                </Box>
            </Box>
            <Box
                className="marquee-container"
                sx={{
                    flexDirection: 'row',
                    width: 'max-content',
                    bottom: -150,
                    filter: 'blur(5px)',
                }}
            >
                {images.concat(images).map((image, index) => ( // Duplica las imágenes para la animación continua
                    <img
                        key={index}
                        src={image}
                        alt={`Food ${index}`}
                        style={{
                            width: '300px',
                            height: '300px',
                            objectFit: 'cover',
                            borderRadius: '20px',
                            marginRight: '10px',
                        }}
                    />
                ))}
            </Box>

        </Box>
    );
};

export default Header;

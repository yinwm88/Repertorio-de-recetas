import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import '../LP.css';
import Ingreso from '../Ingreso';
import foodimg1 from './imagesLP/dessert03.jpg'; 
import foodimg2 from './imagesLP/food9.jpg';
import foodimg3 from './imagesLP/veganfood.jpg';
import foodimg5 from './imagesLP/food1.jpg'
import foodimg4 from './imagesLP/veganfood01.webp'
import foodimg6 from './imagesLP/food3.jpg'
import foodimg7 from './imagesLP/food10.jpg'
import foodimg8 from './imagesLP/food5.jpg'


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
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box sx={{ flex: 1, marginTop: { xs: '20px', md: '80px' }, marginLeft: { xs: '0', md: '10px' }, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center' }}>
                    Recetas Ideales para tu Cocina
                </Typography>
                <Typography sx={{ fontSize: { xs: '3rem', md: '4rem' }, textAlign: 'center' }}>
                    Se tu propio Chef
                </Typography>
                <Typography sx={{ fontSize: { xs: '1.7rem', md: '2.1rem' }, textAlign: 'center' }}>
                    ¿Quieres recetas ya?
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Ingreso />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: { xs: '30px', md: '100px' }, marginRight:{ xs: '20px', md: '160px' } }}>
                <img
                    src={currentImage} 
                    style={{
                        width: '300px', 
                        height: '300px', 
                        objectFit: 'cover', 
                        borderRadius: '40px',
                        marginRight: { xs: '0', md: '30px' },
                        marginTop: { xs: '20px', md: '0' },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Header;

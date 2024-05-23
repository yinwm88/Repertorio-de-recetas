import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';

function CookedRecipeButton() {
    return (
        <Tooltip title="Marcar la receta como cocinada" placement="top">
            <IconButton 
                sx={{
                    marginTop:'30px',
                    marginLeft:'460px',
                    width: '135px', 
                    height: '135px',
                backgroundColor: 'rgba(249, 84, 99, 0.5)',
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.7)',
                borderRadius: '90px',
                '&:hover': {
                    backgroundColor: 'rgba(249, 84, 99 , 1)',
                },
            }} 
            aria-label="cooked recipe"
            >
                <DiningOutlinedIcon  sx={{ fontSize: 90 }} />
            </IconButton>
        </Tooltip>
    );
}

export default CookedRecipeButton;

import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { useAuth } from '../../AuthContext';

function Lista({ }) {
    

    return (
        <Tooltip title="Generar lista de ingredientes" placement="right">

            <IconButton
                size="small"
                aria-label="generar lista"
                color="primary"
                sx={{
                    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.7)',
                    transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
                    borderRadius: '4px', 
                    '&:hover': {
                        backgroundColor: 'rgba(249, 84, 99 , 0.6)',
                        transform: 'scale(1.1)',
                    },
                }}
            >
                <FormatListNumberedRoundedIcon sx={{ fontSize: 20 }} />
            </IconButton>

        </Tooltip>

    );
}

export default Lista;

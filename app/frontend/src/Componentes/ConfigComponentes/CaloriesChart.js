import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Container, Typography } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function CaloriesChart() {
    const data = {
        labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
        datasets: [
        {
            label: 'Calorias consumidas',
            data: [550, 900, 400, 600, 1000],
            fill: true,
            backgroundColor: 'rgba(255, 99, 71, 0.6)',
            borderColor: 'rgb(255, 99, 71)',
            tension: 0.3, // Smooth curves
        },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
        y: {
            beginAtZero: true,
        },
        },
    };

    return (
        <Container sx={{marginBottom:'100px',width:'700px'}}>
            <Typography  variant="h1">
                Calorias            
            </Typography>
            <div style={{marginTop:'50px', height: '400px', width: '600px' }}>
            <Line data={data} options={options} />
            </div>
        </Container>
    );
};


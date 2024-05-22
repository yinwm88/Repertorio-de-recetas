import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Container, Typography } from '@mui/material';

export default function FoodChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type: "polarArea",
            data: {
                labels: [
                    "Vegetales y Frutas",  
                    "Leguminosas y Alimento de origen animal", 
                    "Cereales"
                ],
                datasets: [
                    {
                        data: [10, 8, 8],
                        backgroundColor: [
                            'rgba(26, 214, 26, 0.9)',
                            'rgba(242, 0, 1, 0.9)',
                            'rgba(255, 183, 1, 0.9)',
                        ]
                    }
                ]
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <Container sx={{width:'700px'}}>
            <Typography  variant="h1">
                Balance de comida
            </Typography>
            <canvas ref={chartRef} style={{ width: "300px", height: "200px", marginTop:"40px" }} />
        </Container>
        
    );
}

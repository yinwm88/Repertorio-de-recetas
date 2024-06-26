import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Container, Typography } from '@mui/material';
import { useAuth } from '../../AuthContext';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function CaloriesChart() {
    const { currentUser } = useAuth();

    const [dataCalories, setDataCalories] = useState([]);

    const fetchCaloriesCooked = async () => {
        try {
            const response = await fetch('http://localhost:3001/receta/cocinadas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ correo: currentUser }),
            });
            if (!response.ok) {
                throw new Error('No se pudo cargar las calorías consumidas.');
            }

            const data = await response.json();
            setDataCalories(data);
        } catch (error) {
            console.error('Error al obtener las calorías:', error);
        }
    }

    useEffect(() => {
        fetchCaloriesCooked();
    }, []); 

    const agruparySumarCalorias = (data) => {
        const groupedData = data.reduce((acc, entry) => {
            const date = new Date(entry.fecha);
            const day = date.toISOString().split('T')[0]; 
            if (!acc[day]) {
                acc[day] = 0;
            }
            acc[day] += entry.calorias;
            return acc;
        }, {});

        return Object.keys(groupedData).map(day => ({
            fecha: day,
            calorias: groupedData[day],
        }));
    };

    const caloriasAcumuladas = agruparySumarCalorias(dataCalories);

    const labels = caloriasAcumuladas .map(entry => {
        const daysOfWeek = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
        const date = new Date(entry.fecha);
        return daysOfWeek[date.getDay()];
    });

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Calorías consumidas',
                data: caloriasAcumuladas .map(entry => entry.calorias),
                fill: true,
                backgroundColor: 'rgba(255, 99, 71, 0.6)',
                borderColor: 'rgb(255, 99, 71)',
                tension: 0.3, 
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
        <Container sx={{ marginBottom: '100px', width: '700px' }}>
            <Typography variant="h1">
                Calorías
            </Typography>
            <div style={{ marginTop: '50px', height: '400px', width: '600px' }}>
                <Line data={chartData} options={options} />
            </div>
        </Container>
    );
};

import React, { useState } from 'react';
import { Button, Modal, TextField, Box, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import theme from '../../Tema/tema';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Ingreso = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [userData, setUserData] = useState({
        username: '',
        password: '',
        nombre: '',
        apellido: '',
        correo: ''
    });
    const [open, setOpen] = useState(false);
    const [mostrarRegistro, setMostrarRegistro] = useState(false);

    const handleChange = (prop) => (event) => {
        setUserData({ ...userData, [prop]: event.target.value });
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/join/ingresar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ correo: userData.username, contrasena: userData.password })
            });
            const data = await response.json();

            if (response.ok) {
                login(userData.username, userData.token);
                navigate('/contenido');
            } else {
                alert(data.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al conectar con el servidor.');
        }
        setOpen(false);
    };

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:3001/join/registrarse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            });
            const data = await response.json();

            if (response.ok) {
                alert('Registro exitoso, por favor inicie sesión.');
                setMostrarRegistro(false);
            } else {
                alert(data.message || 'Error al registrar la cuenta');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al conectar con el servidor.');
        }
        setOpen(false);
    };

    const toggleForms = () => {
        setMostrarRegistro(!mostrarRegistro);
        if (mostrarRegistro) {
            setUserData({ ...userData, nombre: '', apellido: '', correo: '' });
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
            <Button
                variant="contained"
                color="primary"
                endIcon={<LoginIcon />}
                onClick={() => setOpen(true)}
            >
                Comenzar
            </Button>

            <Modal
                open={open}
                onClose={() => {
                    setOpen(false);
                    setUserData({
                        username: '',
                        password: '',
                        nombre: '',
                        apellido: '',
                        correo: ''
                    });
                    setMostrarRegistro(false);
                }}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}>
                    {mostrarRegistro ? (
                        <>
                            <Button
                                startIcon={<ArrowBackIcon />}
                                onClick={toggleForms}
                                sx={{ mb: 2 }}
                                style={{ color: 'black' }}
                            >
                                Regresar
                            </Button>
                            <TextField
                                label="Nombre"
                                variant="outlined"
                                fullWidth
                                value={userData.nombre}
                                onChange={handleChange('nombre')}
                            />
                            <TextField
                                label="Apellido"
                                variant="outlined"
                                fullWidth
                                value={userData.apellido}
                                onChange={handleChange('apellido')}
                            />
                            <TextField
                                label="e-mail"
                                variant="outlined"
                                fullWidth
                                value={userData.correo}
                                onChange={handleChange('correo')}
                            />
                            <TextField
                                label="Contraseña"
                                type="password"
                                variant="outlined"
                                fullWidth
                                value={userData.password}
                                onChange={handleChange('password')}
                            />
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleRegister}
                            >
                                Registrar
                            </Button>
                        </>
                    ) : (
                        <>
                            <TextField
                                label="Usuario"
                                variant="outlined"
                                fullWidth
                                value={userData.username}
                                onChange={handleChange('username')}
                            />
                            <TextField
                                label="Contraseña"
                                type="password"
                                variant="outlined"
                                fullWidth
                                value={userData.password}
                                onChange={handleChange('password')}
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1, mt: 2 }}>
                                <Button
                                    variant="outlined"
                                    onClick={toggleForms}
                                >
                                    No tengo cuenta
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleLogin}
                                >
                                    Iniciar Sesión
                                </Button>
                            </Box>
                        </>
                    )}
                </Box>
            </Modal>
        </Box>
    );
};


export default Ingreso;

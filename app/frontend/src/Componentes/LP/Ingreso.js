import React, { useState } from 'react';
import { Button, Modal, TextField, Box, Typography,CircularProgress } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import theme from '../../Tema/tema';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const Ingreso = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const [userData, setUserData] = useState({
        username: '',
        contrasena: '',
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
                body: JSON.stringify({ correo: userData.username, contrasena: userData.contrasena })
            });
            const data = await response.json();


            if (response.ok) {
                login(userData.username, data.token);
                console.log('Datos de usuario:', userData.username, data.token);
                navigate('/contenido');


            } else {
                MySwal.fire({
                    title: <Typography variant="h6" style={{ fontFamily: 'Poppins' }}> {data.error}</Typography>,
                    icon: 'error',
                })

            }
        } catch (error) {
            console.error('Error:', error);
            MySwal.fire({
                title: <Typography variant="h6" style={{ fontFamily: 'Poppins' }}>  {error}</Typography>,
                icon: 'error',
            })
        }
        setOpen(false);
    };

    const handleRegister = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3001/join/registrarse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    correo: userData.correo,
                    nombre: userData.nombre,
                    apellido: userData.apellido,
                    contrasena: userData.contrasena
                })
            });


            const data = await response.json();



            if (response.ok) {

                MySwal.fire({
                    title: <Typography variant="h6" style={{ fontFamily: 'Poppins' }}> Registro exitoso</Typography>,
                    icon: 'success',
                })
                setMostrarRegistro(false);
            } else {
                MySwal.fire({
                    title: <Typography variant="h6" style={{ fontFamily: 'Poppins' }}> {data.error}</Typography>,
                    icon: 'error',
                })
            }
        } catch (error) {
            console.error('Error:', error);
            MySwal.fire({
                title: <Typography variant="h6" style={{ fontFamily: 'Poppins' }}> error</Typography>,
                icon: 'error',
            })
        }
        setOpen(false);
        setIsLoading(false);

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
                        contrasena: '',
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
                                value={userData.contrasena}
                                onChange={handleChange('contrasena')}
                            />
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleRegister}
                                disabled={!userData.nombre || !userData.apellido || !userData.correo || !userData.contrasena || isLoading}
                                startIcon={isLoading ? <CircularProgress size={24} /> : null}
                            >
                                {isLoading ? 'Registrando...' : 'Registrar'}
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
                                value={userData.contrasena}
                                onChange={handleChange('contrasena')}
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
                                    disabled={!userData.username || !userData.contrasena}
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

import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import theme from './Theme/theme';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Ingreso = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    const firstHandleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3030/join/ingresar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    correo: username, // Asegúrate de que username sea el correo, si no, cambia la lógica para obtenerlo correctamente.
                    contrasena: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                navigate('/contenido');
            } else {
                alert(data.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al conectar con el servidor.');
        }

        setOpen(false);
        setUsername('');
        setPassword('');
    };


    const [mostrarRegistro, setMostrarRegistro] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');


    const mostrarFormularioRegistro = () => {
        setMostrarRegistro(true);
    };

    const secondHandleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3030/join/registrarse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    correo,
                    nombre,
                    apellido,
                    contrasena: password,
                }),
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
        setNombre('');
        setApellido('');
        setCorreo('');
        setPassword('');
    };



    return (
        <div>
            <Button
                endIcon={<LoginIcon />}
                onClick={() => setOpen(true)}
                sx={{ marginTop: '55px' }}

            >
                <div className='empezar'>
                    comenzar
                </div>
            </Button>

            <Modal open={open} onClose={() => setOpen(false)}>
                {mostrarRegistro ? (
                    <div className='nueva-cuenta'>
                        <TextField
                            label="Nombre"
                            InputLabelProps={{ style: { color: 'white' } }}
                            InputProps={{ style: { color: 'white' } }}
                            margin="normal"
                            fullWidth
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <TextField
                            label="Apellido"
                            InputLabelProps={{ style: { color: 'white' } }}
                            InputProps={{ style: { color: 'white' } }}
                            margin="normal"
                            fullWidth
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                        />
                        <TextField
                            label="e-mail"
                            InputLabelProps={{ style: { color: 'white' } }}
                            InputProps={{ style: { color: 'white' } }}
                            margin="normal"
                            fullWidth
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />



                        <TextField
                            label="Contraseña"
                            InputLabelProps={{ style: { color: 'white' } }}
                            InputProps={{ style: { color: 'white' } }}
                            type="password"
                            margin="normal"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                            className='boton-crear-cuenta'
                            onClick={secondHandleSubmit}
                        >
                            Registrar
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className='interior'>
                            <TextField
                                label="Usuario"
                                InputLabelProps={{ style: { color: 'white' } }}
                                InputProps={{ style: { color: 'white' } }}
                                margin="normal"
                                fullWidth
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                label="Contraseña"
                                InputLabelProps={{ style: { color: 'white' } }}
                                InputProps={{ style: { color: 'white' } }}
                                type="password"
                                margin="normal"
                                fullWidth
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div>

                                <Button variant="contained"
                                    color="primary"
                                    className='boton-iniciar-sesion'
                                    sx={{ ...theme.components.MuiButton.styleOverrides.root, backgroundColor: '#00A86B ', width: "150px" }}
                                    onClick={firstHandleSubmit}>

                                    Iniciar Sesión
                                </Button>
                                <Button
                                    className='boton-registrar'
                                    sx={{ ...theme.components.MuiButton.styleOverrides.root, width: "180px" }}
                                    onClick={mostrarFormularioRegistro}
                                >
                                    No tengo cuenta
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </Modal>
        </div>
    );
};

export default Ingreso;

import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import theme from './Theme/theme';
import './App.css';

const Ingreso = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    const firstHandleSubmit = () => {
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
        setOpen(false);
        setUsername(''); 
        setPassword(''); 
    };

    const [mostrarRegistro, setMostrarRegistro] = useState(false); 
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    const mostrarFormularioRegistro = () => {
        setMostrarRegistro(true); 
    };

    const secondHandleSubmit = () => {
        console.log('Nombre:', nombre);
        console.log('e-mail:', correo);
        console.log('Contraseña:', password);
        setOpen(false);
        setNombre(''); 
        setCorreo(''); 
        setPassword(''); 
        setMostrarRegistro(false); 
    };

    return (
        <div>
            <Button 
                endIcon={<LoginIcon />} 
                onClick={() => setOpen(true)}
                sx={{margin:'10px', width:'170px', height:'80px', borderRadius:'50px'}}
            > 
                <div className ='empezar'>
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
                                    sx={{...theme.components.MuiButton.styleOverrides.root,backgroundColor:'#67bc57',width:"150px"}} 
                                    href="/otra-pagina" 
                                    onClick={firstHandleSubmit}>

                                    Iniciar Sesión
                                </Button>
                                <Button 
                                    className='boton-registrar'
                                     sx={{...theme.components.MuiButton.styleOverrides.root,width:"180px"}} 
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
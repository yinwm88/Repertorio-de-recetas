import React, { useState } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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

    const mostrarFormularioRegistro = () => {
        setMostrarRegistro(true); 
    };

    const [mostrarRegistro, setMostrarRegistro] = useState(false); 
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

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
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    transition: 'background-color 0.3s', 
                    '&:hover': {
                        backgroundColor: 'rgb(300, 100, 0)', 
                    },
                }}
                startIcon={<AccountCircleIcon/>} 
                onClick={() => setOpen(true)}
            > 
                Ingreso
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
                                    sx={{
                                        backgroundColor:'rgba(0,0,0,0.5 )' ,
                                        color: 'white',
                                        transition: 'background-color 0.3s', 
                                        width:'140px',
                                        height:'45px',
                                        borderRadius:'20px',
                                        '&:hover':{
                                            backgroundColor:'rgba(252, 75, 8, 0.7)' , 
                                        },
                                    }} 
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
                                <Button 
                                    className='boton-iniciar-sesion' 
                                    sx={{
                                        backgroundColor:'#67bc57' ,
                                        color: 'white',
                                        transition: 'background-color 0.3s', 
                                        width:'180px',
                                        height:'45px',
                                        borderRadius:'20px',
                                        '&:hover':{
                                            backgroundColor:'rgba(252, 75, 8, 0.7)' , 
                                        },
                                    }} 
                                    onClick={firstHandleSubmit}
                                > 
                                    Iniciar Sesión
                                </Button>
                                <Button 
                                    className='boton-registrar'
                                    sx={{
                                        backgroundColor: 'rgba(1, 1, 4,0.7)',
                                        color: 'white',
                                        transition: 'background-color 0.3s', 
                                        width:'220px',
                                        height:'45px',
                                        borderRadius:'20px',
                                        '&:hover': {
                                            backgroundColor: 'rgba(252, 75, 8, 0.7)', 
                                        },
                                    }} 
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

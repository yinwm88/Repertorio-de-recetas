import React, { useState } from 'react';
import {FormControl, Container,Typography,FormHelperText,InputAdornment,InputLabel,OutlinedInput,FilledInput,Input, Button,IconButton, Moda, TextField, Dialog,DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/VisibilityOff';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useAuth } from '../../AuthContext';


const CambiarContraseña = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const { changePassword } = useAuth();
    
    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmNewPassword) {
            alert('Las contraseñas nuevas no coinciden');
            return;
        }
        try {
            await changePassword(currentPassword, newPassword);
            alert('Contraseña cambiada exitosamente');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
        } catch (error) {
            alert(error.message || 'Error al cambiar la contraseña');
        }
    };

    return (
        <React.Fragment>
            <Button onClick={handleClickOpen} sx={{width:'220px', height:'50', marginTop:'10px', marginLeft:'10px', backgroundColor:'#27728A'}} variant="contained" startIcon={<KeyIcon />}>
                Cambiar contraseña
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                component: 'form',
                onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const email = formJson.email;
                    console.log(email);
                    handleClose();
                },
                }}
            >
                <DialogTitle sx={{fontSize:'30px'}} > Cambiar contraseña </DialogTitle>
                <Container>
                    <DialogContent sx={{width:'500px'}}>
                            <FormControl sx={{ m: 1, width: '400px' }} variant="outlined">
                                <Typography htmlFor="outlined-adornment-password">Contraseña actual:</Typography>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        type="password"
                                        id="currentPassword"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        required
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                
                            <FormControl sx={{ m: 1, width: '400px' }} variant="outlined">
                                <Typography htmlFor="outlined-adornment-password">Nueva contraseña:</Typography>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        type="password"
                                        id="currentPassword"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                    
                            <FormControl sx={{ m: 1, width: '400px' }} variant="outlined">
                                
                                <Typography htmlFor="outlined-adornment-password">Confirmar nueva contraseña:</Typography>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        type="password"
                                        id="currentPassword"
                                        value={confirmNewPassword}
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                                        required
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>

                    </DialogContent>
                    <Container sx={{marginBottom:'20px'}}>
                        <DialogActions>
                        <Button variant="contained" onClick={handleClose}>Cancelar</Button>
                        <Button variant="contained"  onClick={handleChangePassword} >Cambiar </Button>
                        </DialogActions>
                    </Container>
                </Container>
            </Dialog>
        </React.Fragment>

    );
}

export default CambiarContraseña;

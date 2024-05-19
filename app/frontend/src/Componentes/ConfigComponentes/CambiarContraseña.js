import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import KeyIcon from '@mui/icons-material/Key';
import {
    Box,
    Button,
    IconButton,
    Input,
    FilledInput,
    Container,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormHelperText,
    FormControl,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField
} from '@mui/material';
import { useAuth } from '../../AuthContext';

export default function CambiarContraseña() {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword:'',
    })


    const [showPassword1, setShowPassword1] = useState(false);
    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    const handleMouseDownPassword1 = (event) => {
        event.preventDefault();
    };
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [showPassword2, setShowPassword2] = useState(false);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };


    const [showPassword3, setShowPassword3] = useState(false);
    const handleClickShowPassword3 = () => setShowPassword3((show) => !show);
    const handleMouseDownPassword3 = (event) => {
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
            console.error('Error al cambiar la contraseña:', error.message);
            alert(error.message || 'Error al cambiar la contraseña. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <div>
    

            <Dialog open={open} onClose={handleClose}>
                <Container>
                    <DialogTitle sx={{ fontSize: '25px' }}>Cambiar Contraseña</DialogTitle>
                    <DialogContent>
                        <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                            <InputLabel htmlFor="current-password">Contraseña actual</InputLabel>
                            <OutlinedInput
                                id="current-password"
                                type={showPassword1 ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword1}
                                            onMouseDown={handleMouseDownPassword1}
                                            edge="end"
                                        >
                                            {showPassword1 ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required
                                label="Contraseña actual"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                            <InputLabel htmlFor="new-password">Nueva contraseña</InputLabel>
                            <OutlinedInput
                                id="new-password"
                                type={showPassword2 ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword2}
                                            onMouseDown={handleMouseDownPassword2}
                                            edge="end"
                                        >
                                            {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                label="Nueva contraseña"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                            <InputLabel htmlFor="confirm-new-password">Confirmar nueva contraseña</InputLabel>
                            <OutlinedInput
                                id="confirm-new-password"
                                type={showPassword3 ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword3}
                                            onMouseDown={handleMouseDownPassword3}
                                            edge="end"
                                        >
                                            {showPassword3 ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                required
                                label="Confirmar nueva contraseña"
                            />
                        </FormControl>
                    </DialogContent>
                </Container>

                <DialogActions>
                    <Box sx={{ marginRight: '240px' }}>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button onClick={handleChangePassword}>Guardar</Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </div>
    );
}

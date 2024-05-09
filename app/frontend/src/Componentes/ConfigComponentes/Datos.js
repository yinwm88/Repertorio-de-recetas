import React from "react";
import {Typography, Button, FormControl, OutlinedInput, InputAdornment, FormHelperText} from '@mui/material';
import { useAuth } from "../../AuthContext";
import KeyIcon from '@mui/icons-material/Key';
import Container from '@mui/material/Container';
import SaveIcon from '@mui/icons-material/Save';


const Datos = () => {

    const { currentUser, getToken } = useAuth();

    return (
    <div>
        <Typography style={{ fontWeight: "bold" }} color="primary" variant="h3" gutterBottom>
            Tus Datos
        </Typography>
        <Typography sx={{marginTop:'40px', marginLeft:'10px'}}  variant="h5" gutterBottom>
            Correo: {currentUser || 'No disponible'}
        </Typography>
        <Button sx={{width:'220px', height:'50', marginTop:'10px', marginLeft:'10px', backgroundColor:'#27728A'}} variant="contained" startIcon={<KeyIcon />}>
                Cambiar contraseña
        </Button>
        
        <div>
            <Typography sx={{marginTop:'50px', marginLeft:'10px'}}  variant="h5" gutterBottom>
                    Sobre Ti:
            </Typography> 
            <Container sx={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
                
                <FormControl sx={{ m: 1, width: 'calc(50% - 12px)' }} variant="outlined">
                    <Typography  variant="h6" gutterBottom  >
                        Peso
                    </Typography>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        type="number"
                        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'weight',
                        }}
                    />
                </FormControl>
                <FormControl sx={{ m: 1, height: 'calc(50% - 12px)' }} variant="outlined">
                    <Typography  variant="h6" gutterBottom  >
                    Estatura
                    </Typography>
                    <OutlinedInput
                        id="outlined-adornment-height"
                        type="number"
                        endAdornment={<InputAdornment position="end">mts</InputAdornment>}
                        aria-describedby="outlined-height-helper-text"
                        inputProps={{
                            'aria-label': 'height',
                        }}
                    />
                </FormControl>
            </Container>

            <Typography sx={{marginTop:'50px', marginLeft:'10px'}}  variant="h5" gutterBottom>
                    Alergias:
            </Typography>
            <Container>

            </Container>

        </div>
        <div >
            <Button sx={{marginLeft:'700px',marginTop:'20px'}} variant="contained" endIcon={<SaveIcon />}>
            Guardar 
            </Button>
        </div>
    </div>


    );
}

export default Datos;

import{ React, useState, Fragment, useRef} from "react";
import {Tooltip,MenuItem ,Dialog, DialogActions, DialogContent, DialogTitle, IconButton,Typography, Button, FormControl, OutlinedInput, InputAdornment, } from '@mui/material';
import { useAuth } from "../../AuthContext";
import KeyIcon from '@mui/icons-material/Key';
import Container from '@mui/material/Container';
import Alergias from './Alergias';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InfoIcon from '@mui/icons-material/Info';
import Contraseña from './CambiarContraseña';
import SaveIcon from '@mui/icons-material/Save';
import Swal from 'sweetalert2';


const Datos = () => {

    const [formData, setFormData] = useState({
        peso: '',
        estatura: '',
        actividad:'',
        Tiene_Alergia: 'no',
        ingredientes: []
    });

    const { currentUser, getToken } = useAuth();

    const [peso, setPeso] = useState('');
    const [estatura, setEstatura] = useState('');
    const [actividad, setActividad] = useState('');


    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const fetchIngredients = async (text) => {
        if (!text.trim()) {
            setSearchResults([]);
            return;
        }
    
        

        try {
            const response = await fetch(`http://localhost:3001/ingrediente/buscar`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ingrediente: text }),
            });
            const data = await response.json();
            if (response.ok) {
                if (Array.isArray(data.ingredientes)) {
                    setSearchResults(data.ingredientes);
                } else {
                    setSearchResults([]);
                }
            } else {
                console.error('Error buscando ingredientes:', data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSubmit = async () => {


        if(formData.Tiene_Alergia === 'no' && selectedIngredients.length !== 0 ) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Asegurate de haber eliminado los ingredientes seleccionados anteriormente si no tienes alergia.',
            })
        }else{   
            const formBody = [];

            // Añadir campos del formulario a formBody.
            formBody.push(`peso=${encodeURIComponent(peso)}`);
            formBody.push(`estatura=${encodeURIComponent(estatura)}`);
            // Añadir ingredientes a formBody.
            selectedIngredients.forEach((ingrediente, index) => {
                formBody.push(`ingredientes[${index}][idIngrediente]=${encodeURIComponent(ingrediente.idingrediente)}`);  
            });

            
            try {
                const response = await fetch('http://localhost:30001/ruta/para/enviar/datos/del/usuario', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                        'Authorization': `Bearer ${getToken()}`,
                    },
                    body: formBody.join("&"),
                    token: getToken(),
                });
                
                let data;
                try {
                    data = await response.json();
                } catch (error) {
                    // Si la respuesta no es JSON, manejar el error o establecer un mensaje predeterminado
                    console.error('No se recibió un JSON válido:');
                }
        
                if (response.ok) {
                    // Si el código de estado indica éxito
                    alert(data.message || '¡Se han registrado tus datos!');
                    // Aquí podrías redireccionar al usuario o resetear los estados del formulario
                    setEstatura('');
                    setPeso('');
                    setSelectedIngredients([]);
                    console.log('Datos de receta agregada', data)
                } else {
                    // Si el servidor respondió con un error
                    alert(data.message || 'Hubo un problema al registrar tus datos. Por favor, intenta nuevamente.');
                }
    
            }
            
            catch (error) {
                    alert('Hubo un error al registrar datos. Por favor, inténtalo nuevamente más tarde.');
            }
        }
    };

    const handleAlergiaChange = (e) => {
        const { name, value } = e.target;
        
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
          // Si el usuario selecciona "No" después de haber seleccionado "Sí",
          // borramos el valor en "Ingredientes_Alergia"
            ingredientes: name === 'Tiene_Alergia' && value === 'no' ? [] : prevFormData.ingredientes,

        }));
    };

    const [tooltipOpen, setTooltipOpen] = useState(false);

    
    const handleMouseEnter = () => {
        setTooltipOpen(true);
    };
    
    const handleMouseLeave = () => {
        setTooltipOpen(false);
    };

    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


    return (
        <Container sx={{marginTop:'30px', height: '100vh'}} fixed>
            <div>
                <Typography style={{ fontWeight: "bold" }} color="primary" variant="h3" gutterBottom>
                    Tus Datos
                </Typography>
                <Typography sx={{marginTop:'40px', marginLeft:'10px'}}  variant="h5" gutterBottom>
                    Correo: {currentUser || 'No disponible'}
                </Typography>
                <Contraseña/>
                
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
                                    id="peso"
                                    name="peso"
                                    type="number"
                                    value={peso}
                                    onChange={(e) => setPeso(e.target.value)}
                                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'peso',
                                    }}
                                    />
                            </FormControl>
                            <FormControl sx={{ m: 1, height: 'calc(50% - 12px)' }} variant="outlined">
                                <Typography  variant="h6" gutterBottom  >
                                Estatura
                                </Typography>
                                <OutlinedInput
                                    id="estatura"
                                    name="estatura"
                                    type="number"
                                    value={estatura}
                                    onChange={(e) => setEstatura(e.target.value)}
                                    endAdornment={<InputAdornment position="end">mts</InputAdornment>}
                                    aria-describedby="outlined-height-helper-text"
                                    inputProps={{
                                        'aria-label': 'estatura',
                                    }}
                                    />
                            </FormControl>
                            <div>
                                <FormControl sx={{width:'230px', m: 1, height: 'calc(50% - 12px)'}}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography sx={{marginLeft:'10px'}} variant="h6" gutterBottom  >
                                            Actividad Fisica                                
                                        </Typography>
                                        <Fragment>
                                            <Tooltip
                                                title="Info"
                                                placement="left"
                                                arrow
                                                open={tooltipOpen}
                                                onClose={handleMouseLeave}
                                                sx={{width:'20px', marginLeft:'20px'}}
                                                >
                                                <IconButton
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                onClick={handleOpenDialog}
                                                >
                                                <InfoIcon/>
                                                </IconButton>
                                            </Tooltip> 
                                            <Dialog
                                                open={openDialog}
                                                onClose={handleCloseDialog}
                                                aria-labelledby="dialog-title"
                                                aria-describedby="dialog-description"
                                                sx={{ borderRadius: '55px' }}
                                            >
                                                <DialogTitle sx={{fontSize:'30px', fontWeight:'bold'}}id="dialog-title" color='white'>Información  </DialogTitle>
                                                <DialogContent>
                                                    <p id="dialog-description"> Para considerar la actividad física como</p>
                                                    <h4>Alta</h4>
                                                    <p id="dialog-description"> Generalmente se recomienda realizar ejercicio al menos cinco veces a la semana, con una duración de al menos 30 minutos por sesión.Esto significa que deberías estar realizando actividades que elevan tu ritmo cardíaco y te hacen sudar durante la mayoría de esos días.</p>
                                                    <h4>Moderada</h4>
                                                    <p id="dialog-description"> Generalmente se recomienda realizar ejercicio al menos tres o cuatro veces a la semana, con una duración de al menos 30 minutos por sesión. Esto implica realizar actividades que elevan el ritmo cardíaco y causan una ligera sudoración durante la mayoría de esos días. </p>
                                                    <h4>Baja</h4>
                                                    <p id="dialog-description"> Generalmente se recomienda realizar ejercicio al menos una o dos veces a la semana, con una duración de al menos 30 minutos por sesión. Este nivel de actividad física puede incluir actividades suaves como caminar, estiramientos ligeros o yoga.</p>

                                                </DialogContent>
                                                <DialogActions>
                                                    <Button  variant="contained"  sx={{ color: 'white', '&:hover': {backgroundColor: '#25ACD7', },marginRight:'20px', marginBottom:'20px'}} onClick={handleCloseDialog} >
                                                        Cerrar
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </Fragment>
                                    </div>

                                    <Select
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        value={actividad}
                                        label="Actividad"
                                        onChange={(e) => setActividad(e.target.value)}
                                        autoWidth
                                    >
                                        <MenuItem value={'Alta'}>
                                            Alta
                                        </MenuItem>
                                        endAdornment={<InputAdornment position="end">5-7 veces por semana</InputAdornment>}

                                        <MenuItem value={'Moderada'}>
                                            Moderada
                                            </MenuItem>
                                        endAdornment={<InputAdornment position="end">3-4 veces por semana</InputAdornment>}
                                        
                                        <MenuItem value={'Baja'}>
                                            Baja
                                        </MenuItem>
                                        endAdornment={<InputAdornment position="end">1-2 veces por semana</InputAdornment>}

                                        <MenuItem value={'Nada'}>
                                            Nada
                                        </MenuItem>
                                        endAdornment={<InputAdornment position="end">0 veces por semana</InputAdornment>}

                                    </Select>
                                
                                </FormControl>
                            </div>

                        </Container>

                        <Typography sx={{marginTop:'30px', marginLeft:'10px'}}  variant="h5" gutterBottom>
                            ¿Tiene alergia a algún ingrediente?
                        </Typography>   
                        <Container >
                                <Alergias value1={formData.Tiene_Alergia} handleAlergiaChange={handleAlergiaChange} searchText={searchText} setSearchText={setSearchText} fetchIngredients={fetchIngredients} setSelectedIngredients={setSelectedIngredients} setSearchResults={setSearchResults} searchResults={searchResults} selectedIngredients={selectedIngredients} />
                        </Container>        
                    </div>
                    <div >
                        
                        <Container>
                            <Button onClick={handleSubmit} sx={{marginLeft:'700px',marginTop:'30px'}} variant="contained" endIcon={<SaveIcon />}  disabled={(formData.Tiene_Alergia === 'si' && selectedIngredients.length === 0)|| !peso || !estatura|| !actividad}>
                                Guardar 
                            </Button>
                        </Container>
                    </div>
            </div>
        </Container>


    );
}

export default Datos;

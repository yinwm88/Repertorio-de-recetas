import{ React, useState} from "react";
import {Typography, Button, FormControl, OutlinedInput, InputAdornment, FormHelperText} from '@mui/material';
import { useAuth } from "../../AuthContext";
import KeyIcon from '@mui/icons-material/Key';
import Container from '@mui/material/Container';
import SaveIcon from '@mui/icons-material/Save';
import Alergias from './Alergias';


const Datos = () => {

    const [formData, setFormData] = useState({
        peso: '',
        estatura: '',
        Tiene_Alergia: 'no',
        ingredientes: []
    });

    const { currentUser, getToken } = useAuth();

    const [peso, setPeso] = useState('');
    const [estatura, setEstatura] = useState('');

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
        const formBody = [];

        // Añadir campos del formulario a formBody.
        formBody.push(`peso=${encodeURIComponent(peso)}`);
        formBody.push(`estatura=${encodeURIComponent(estatura)}`);
        // Añadir ingredientes a formBody.
        selectedIngredients.forEach((ingrediente, index) => {
            formBody.push(`ingredientes[${index}][idIngrediente]=${encodeURIComponent(ingrediente.idingrediente)}`);  
        });
    
        try {
            const response = await fetch('ruta/para/enviar/datos/del/usuario', {
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

    
    return (
        <Container sx={{marginTop:'30px', height: '100vh'}} fixed>
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
                        </Container>

                        <Typography sx={{marginTop:'30px', marginLeft:'10px'}}  variant="h5" gutterBottom>
                            ¿Tiene alergia a algún ingrediente?
                        </Typography>   
                        <Container >
                                <Alergias value1={formData.Tiene_Alergia} handleAlergiaChange={handleAlergiaChange} searchText={searchText} setSearchText={setSearchText} fetchIngredients={fetchIngredients} setSelectedIngredients={setSelectedIngredients} setSearchResults={setSearchResults} searchResults={searchResults} selectedIngredients={selectedIngredients} />
                        </Container>        
                    </div>
                    <div >
                        <Button onClick={handleSubmit} sx={{marginLeft:'700px',marginTop:'30px'}} variant="contained" endIcon={<SaveIcon />}>
                        Guardar 
                        </Button>
                    </div>
            </div>
        </Container>


    );
}

export default Datos;

import React, { useState, useEffect } from 'react';
import {
  Grid,
  ButtonGroup,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Box,
  styled,
  Dialog,
} from '@mui/material';

const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: 'white',
}));

const FormInput = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));

const FormButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const FormOpcional = ({ onClose }) => {
  const [formData, setFormData] = useState({
    Fecha_de_nacimiento: '',
    Talla: '',
    Peso: '',
    Objetivo: [],
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegistered(true);
    setModalIsOpen(false);
    onClose();
  };

  // Función para omitir el formulario
  const handleOmit = () => {
    setRegistered(true);
    setModalIsOpen(false);
    onClose();
  };

  // Efecto para abrir el modal cuando no está registrado
  useEffect(() => {
    if (!registered) {
      setModalIsOpen(true);
    }
  }, [registered]);

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  const objetivoOptions = [
    { value: 'bajar_peso', label: 'Bajar de peso' },
    { value: 'ganar_peso', label: 'Ganar peso' },
    { value: 'controlar_dieta', label: 'Controlar dieta' },
  ];

  // Función para manejar la selección de objetivos
  const handleObjetivoSelect = (value) => {
    const index = formData.Objetivo.indexOf(value);
    if (index === -1) {
      setFormData((prevData) => ({
        ...prevData,
        Objetivo: [...prevData.Objetivo, value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        Objetivo: prevData.Objetivo.filter((item) => item !== value),
      }));
    }
  };

  return (
    <Dialog
      open={modalIsOpen}
      onClose={closeModal}
      aria-labelledby="form-dialog-title"
    >      <FormContainer onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Completa tu registro
        </Typography>
        <FormInput
          label="Fecha de nacimiento"
          type="date"
          name="Fecha_de_nacimiento"
          value={formData.Fecha_de_nacimiento}
          onChange={handleChange}
          inputProps={{
            max: new Date().toISOString().split('T')[0],
            pattern: '\\d{4}-\\d{2}-\\d{2}',
          }}
          InputLabelProps={{ shrink: true }}
          required
          fullWidth
        />
        <FormInput
          label="Peso"
          name="Peso"
          type="text"
          value={formData.Peso}
          onChange={handleChange}
          variant="outlined"
          required
          fullWidth
          InputProps={{
            endAdornment: <Typography variant="subtitle2">kg</Typography>,
          }}
          onKeyDown={(e) => {
            if (!(e.key === 'Backspace') && isNaN(Number(e.key))) {
              e.preventDefault();
            }
          }}
        />
        <FormInput
          label="Talla"
          name="Talla"
          type="text"
          value={formData.Talla}
          onChange={handleChange}
          variant="outlined"
          InputProps={{
            endAdornment: <Typography variant="subtitle2">m.cm</Typography>,
          }}
          required
          onKeyDown={(e) => {
            if (!(e.key === 'Backspace') && !(e.key === '.') && isNaN(Number(e.key))) {
              e.preventDefault();
            }
          }}
        />
        <FormControl fullWidth required variant="outlined">
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <InputLabel id="objetivo-label">Objetivo</InputLabel>
            </Grid>
            <Grid item>
              <ButtonGroup variant="contained" fullWidth aria-labelledby="objetivo-label" style={{ marginTop: '50px' }}>
                {objetivoOptions.map((option) => (
                  <Button
                    key={option.value}
                    onClick={() => handleObjetivoSelect(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </ButtonGroup>
            </Grid>
          </Grid>
        </FormControl>

        <FormButton type="submit" variant="contained" color="primary" fullWidth>
          Enviar
        </FormButton>
        <FormButton type="button" variant="outlined" color="primary" fullWidth onClick={handleOmit}>
          Omitir
        </FormButton>
      </FormContainer>
    </Dialog>
  );
};

export default FormOpcional;
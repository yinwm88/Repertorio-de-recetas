import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import FechaNacimiento from './Datos/Generales/FechaNacimiento'
import Peso from './Datos/Generales/Peso'
import Talla from './Datos/Generales/Talla'
import Objetivo from './Datos/Opcionales/Objetivo';
import Alergias from './Datos/Opcionales/Alergias';
import { Typography, styled, Button, Dialog } from '@mui/material';

//IMPORTANTE
// Cargar los ingredientes de la base de datos
const ingredientesBaseDatos = ['Trigo', 'Leche', 'Huevo'];


const FormContainer = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px',
  padding: theme.spacing(2),
  backgroundColor: 'white',
  borderRadius: '8px',
  outline: 'none',
}));


const FormButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));

const FormOpcional = ({ onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [registered, setRegistered] = useState(false);

  const [formData, setFormData] = useState({
    Fecha_de_nacimiento: '',
    Talla: '',
    Peso: '',
    Tiene_Objetivo: 'no',
    Objetivo: '',
    Tiene_Enfermedad: 'no',
    Enfermedades: [],
    Tiene_Alergia: 'no',
    Ingredientes_Alergia: [],
    searchText: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleObjetivoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      Objetivo: value === 'no' ? '' : prevFormData.Objetivo,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      Tiene_Objetivo: value !== '' ? 'si' : 'no',
    }));
  };

  const handleAlergiaChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      // Si el usuario selecciona "No" después de haber seleccionado "Sí",
      // borramos el valor en "Ingredientes_Alergia"
      Ingredientes_Alergia: name === 'Tiene_Alergia' && value === 'no' ? [] : prevFormData.Ingredientes_Alergia,
    }));
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        Ingredientes_Alergia: [...prevFormData.Ingredientes_Alergia, value],
        // Si el usuario selecciona un ingrediente después de haber seleccionado "No",
        // cambiamos el valor de "Tiene_Alergia" a "si"
        Tiene_Alergia: 'si',
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        Ingredientes_Alergia: prevFormData.Ingredientes_Alergia.filter(
          (item) => item !== value
        ),
      }));
    }
  };

  const handleSearchInputChange = (event) => {
    setFormData({
      ...formData,
      searchText: event.target.value,
    });
  };

  const filteredIngredientes = ingredientesBaseDatos.filter((ingrediente) =>
    ingrediente.toLowerCase().includes(formData.searchText.toLowerCase())
  );


  useEffect(() => {
    if (!registered) {
      setModalIsOpen(true);
    }
  }, [registered]);

  const closeModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegistered(true);
    setModalIsOpen(false);
    onClose();
  };

  const handleOmit = () => {
    setRegistered(true);
    setModalIsOpen(false);
    onClose();
  };

  return (
    <Dialog open={modalIsOpen} onClose={closeModal}>
        <FormContainer onSubmit={handleSubmit}>

          <Typography variant="h6" gutterBottom>
            Completa tu registro
          </Typography>

          <FechaNacimiento value={formData.Fecha_de_nacimiento} handleChange={handleChange} />

          <Peso value={formData.Peso} handleChange={handleChange} />

          <Talla value={formData.Talla} handleChange={handleChange} />

          <Objetivo value1={formData.Tiene_Objetivo} value2={formData.Objetivo} handleObjetivoChange={handleObjetivoChange} handleSelectChange={handleSelectChange} />

          <Alergias value1={formData.Tiene_Alergia} value2={formData.searchText} value3={formData.Ingredientes_Alergia} handleAlergiaChange={handleAlergiaChange} handleCheckboxChange={handleCheckboxChange} handleSearchInputChange={handleSearchInputChange} filteredIngredientes={filteredIngredientes} />


          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormButton type="submit" variant="contained" color="primary">
              Enviar
            </FormButton>
            <FormButton
              type="button"
              variant="outlined"
              style={{
                background: 'none',
                color: 'grey',
                textDecoration: 'underline',
                border: 'none',
                marginLeft: '210px'
              }}
              onClick={handleOmit}
              onMouseEnter={(e) => e.target.style.color = 'blue'}
              onMouseLeave={(e) => e.target.style.color = 'grey'}
            >
              Omitir
            </FormButton>
          </div>


        </FormContainer>
    </Dialog>
  );
};

export default FormOpcional;

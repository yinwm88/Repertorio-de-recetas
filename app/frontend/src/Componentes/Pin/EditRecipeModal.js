import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  FormControl,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  DialogActions,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const EditRecipeModal = ({
  open,
  handleClose,
  handleSaveChanges,
  nombreEditado,
  setNombre,
  procesoEditado,
  setProceso,
  tiempoEditado,
  setTiempo,
  searchText,
  setSearchText,
  searchResults,
  fetchIngredients,
  selectedIngredients,
  setSelectedIngredients,
  editOption,
  setEditOption,
  setSearchResults
}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle style={{ textAlign: "center" }}>
        Editando {nombreEditado}
      </DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="normal">
          <InputLabel id="edit-option-label">¿Qué deseas editar de la receta?</InputLabel>
          <Select
            id="edit-option"
            value={editOption}
            onChange={(e) => setEditOption(e.target.value)}
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            <MenuItem value="name">Nombre de la receta</MenuItem>
            <MenuItem value="recipeDetails">Procedimiento</MenuItem>
            <MenuItem value="tiempo">Tiempo de preparación</MenuItem>
            <MenuItem value="ingredientes">Lista de ingredientes</MenuItem>
          </Select>
        </FormControl>

        {editOption === "name" && (
          <>
            <InputLabel id="edit-option-label">Nuevo nombre de la receta</InputLabel>
            <FormControl fullWidth margin="normal">
              <TextField
                labelId="edit-option-label"
                id="recipe-name"
                type="text"
                value={nombreEditado}
                onChange={(e) => setNombre(e.target.value)}
                fullWidth
              />
            </FormControl>
          </>
        )}

        {editOption === "recipeDetails" && (
          <>
            <Typography variant="subtitle1" gutterBottom>
              Nuevos Detalles de la Receta
            </Typography>
            <FormControl fullWidth margin="normal">
              <TextField
                id="recipe-details"
                multiline
                rows={4}
                value={procesoEditado}
                onChange={(e) => setProceso(e.target.value)}
                fullWidth
              />
            </FormControl>
          </>
        )}

        {editOption === "tiempo" && (
          <>
            <Typography variant="subtitle1" gutterBottom>
              Nuevo Tiempo de preparación
            </Typography>
            <FormControl fullWidth margin="normal">
              <TextField
                id="tiempo"
                name="tiempo"
                label="Tiempo de preparación (minutos)"
                type="number"
                variant="outlined"
                value={tiempoEditado}
                onChange={(e) => setTiempo(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
            </FormControl>
          </>
        )}

        {editOption === "ingredientes" && (
          <>
            <Typography variant="subtitle1" gutterBottom>
              Nueva lista de ingredientes
            </Typography>
            <FormControl fullWidth margin="normal">
              <TextField
                id="searchIngredient"
                label="Buscar ingrediente"
                type="text"
                fullWidth
                variant="outlined"
                value={searchText}
                onChange={(e) => {
                  const text = e.target.value;
                  setSearchText(text);
                  fetchIngredients(text);
                }}
                margin="normal"
              />
              <List>
                {searchResults.map((ingrediente) => (
                  <ListItem
                    key={ingrediente.idingrediente}
                    button
                    onClick={() => {
                      setSelectedIngredients([...selectedIngredients, { ...ingrediente, cantidad: 1, unidad: ingrediente.unidad }]);
                      setSearchResults([]);
                      setSearchText("");
                    }}
                  >
                    <ListItemText
                      primary={`${ingrediente.nombre} (${ingrediente.unidad})`}
                    />
                  </ListItem>
                ))}
              </List>

              <List>
                {selectedIngredients.map((ing, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={`${ing.nombre} (${ing.cantidad} ${ing.unidad})`}
                    />
                    <TextField
                      type="number"
                      value={ing.cantidad}
                      onChange={(e) => {
                        const newSelectedIngredients = [...selectedIngredients];
                        newSelectedIngredients[index].cantidad = Number(e.target.value);
                        setSelectedIngredients(newSelectedIngredients);
                      }}
                    />
                    <IconButton
                      onClick={() => {
                        const newSelectedIngredients = selectedIngredients.filter((_, i) => i !== index);
                        setSelectedIngredients(newSelectedIngredients);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </FormControl>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSaveChanges} color="primary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditRecipeModal;

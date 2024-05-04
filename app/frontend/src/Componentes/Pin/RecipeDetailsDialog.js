import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./RecipeDetailsDialog.css";

const RecipeDetailsDialog = ({ open, handleClose, name, imgSrc, recipeDetails }) => {
  const [expanded, setExpanded] = useState("panel1");
  const [currentStep, setCurrentStep] = useState(0);

  const pasos = (recipeDetails?.proceso?.split('.') || []).filter(paso => paso.trim() !== "");
  const ingredientes = recipeDetails?.ingredientes || [];
  const utensilios = recipeDetails?.utensilios || [];
  const tiempo = recipeDetails?.tiempo || "N/A";

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleProgress = () => {
    if (currentStep < pasos.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogContent className="dialog-content">
        <div className="image-container">
          <img src={imgSrc} alt={`Detalle de ${name}`} />
        </div>
        <div className="details-container">
          <h2>{name}</h2>
          <Accordion expanded={expanded === "panel1"} onChange={handleAccordionChange("panel1")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Tiempo de preparación</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{tiempo} minutos</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === "panel2"} onChange={handleAccordionChange("panel2")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Ingredientes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {ingredientes.map((ingrediente, index) => (
                  <li key={index}>Ingrediente {ingrediente.idingrediente}: {ingrediente.cantidad}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === "panel3"} onChange={handleAccordionChange("panel3")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Utensilios</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {utensilios.map((utensilio, index) => (
                  <li key={index}>Utensilio {utensilio.idelectro}</li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === "panel4"} onChange={handleAccordionChange("panel4")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Pasos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ol>
                {pasos.map((paso, index) => (
                  <li
                    key={index}
                    className={`paso ${index <= currentStep ? "visible" : "blurry"}`}
                  >
                    {paso.trim()}
                  </li>
                ))}
              </ol>
              <Button
                variant="contained"
                color="primary"
                onClick={handleProgress}
                disabled={currentStep >= pasos.length - 1}
              >
                Progresar
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>
      </DialogContent>
      <DialogActions style={{backgroundColor:'#00ff282e'}}>
        <Button onClick={handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RecipeDetailsDialog;

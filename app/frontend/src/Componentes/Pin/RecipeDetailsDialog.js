import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
  Grid,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import KitchenIcon from "@mui/icons-material/Kitchen";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import CheckIcon from "@mui/icons-material/Check";
import "./RecipeDetailsDialog.css";

const RecipeDetailsDialog = ({ open, handleClose, name, imgSrc, recipeDetails }) => {
  const [expanded, setExpanded] = useState("panel1");
  const [currentStep, setCurrentStep] = useState(0);
  const [ingredientDetails, setIngredientDetails] = useState([]);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [utensilioDetails, setUtensilioDetails] = useState([]);

  const pasos = (recipeDetails?.proceso?.split(".") || []).filter((paso) => paso.trim() !== "");
  const ingredientes = recipeDetails?.ingredientes || [];
  const utensilios = recipeDetails?.utensilios || [];
  const tiempo = recipeDetails?.tiempo || "N/A";

  const iconList = [FastfoodIcon, RestaurantIcon, KitchenIcon, DinnerDiningIcon];

  useEffect(() => {
    const fetchIngredientDetails = async () => {
      const promises = ingredientes.map(async (ingrediente) => {
        const response = await fetch("http://localhost:3001/ingrediente/datos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: ingrediente.idingrediente }),
        });
        return response.json();
      });
      const details = await Promise.all(promises);
      setIngredientDetails(details);
    };

    const fetchUtensilioDetails = async () => {
      const promises = utensilios.map(async (utensilio) => {
        const response = await fetch("http://localhost:3001/usuario/utensilio/datos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: utensilio.idelectro }),
        });
        return response.json();
      });
      const details = await Promise.all(promises);
      setUtensilioDetails(details);
    };

    fetchIngredientDetails();
    fetchUtensilioDetails();
  }, [ingredientes, utensilios]);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleIngredientCheck = (index) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleProgress = () => {
    if (currentStep < pasos.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const getTimelineDot = (index) => {
    const IconComponent = iconList[index % iconList.length];
    return (
      <TimelineDot color={index <= currentStep ? "primary" : "grey"}>
        <IconComponent />
      </TimelineDot>
    );
  };

  const progressPercentage = Math.round(((currentStep + 1) / pasos.length) * 100);

  const dialogActionsStyle = {
    background: `linear-gradient(to right, #ffe95c ${progressPercentage}%, #ffffff ${progressPercentage}%)`,
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 16px",
    transition: " 0.5s ease-out",
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullScreen>
      <DialogContent className="dialog-content">
        <div className="image-container">
          <img src={imgSrc} alt={`Detalle de ${name}`} style={{ width: "100%" }} />
        </div>
        <div className="details-container">
          <h2>{name}</h2>
          <Accordion expanded={expanded === "panel1"} onChange={handleAccordionChange("panel1")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Detalles</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Typography variant="h6">Tiempo de preparación</Typography>
                    <Typography>{tiempo} minutos</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box>
                    <Typography variant="h6">Ingredientes</Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {ingredientDetails.map((ingrediente, index) => {
                        const isChecked = checkedIngredients[index] || false;
                        return (
                          <Chip
                            key={index}
                            label={`${ingrediente.nombre} (${ingrediente.unidad}), ${ingrediente.calorias} cal`}
                            icon={isChecked ? <CheckIcon /> : null}
                            onClick={() => handleIngredientCheck(index)}
                            style={{ backgroundColor: isChecked ? "green" : "orange", color: "white" }}
                          />
                        );
                      })}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Typography variant="h6">Utensilios</Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {utensilioDetails.map((utensilio, index) => (
                        <Chip
                          key={index}
                          label={`${utensilio.nombre}${utensilio.sustituto ? ` (Sustituto: ${utensilio.sustituto})` : ""}`}
                          color="secondary"
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === "panel2"} onChange={handleAccordionChange("panel2")}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Pasos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Timeline position="alternate">
                {pasos.map((paso, index) => (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent
                      sx={{ m: "auto 0" }}
                      align={index % 2 === 0 ? "right" : "left"}
                      variant="body2"
                      color="text.secondary"
                    >
                      {`Paso ${index + 1}`}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      {index > 0 && <TimelineConnector sx={{ bgcolor: index <= currentStep ? "primary.main" : "grey.500" }} />}
                      {getTimelineDot(index)}
                      {index < pasos.length - 1 && <TimelineConnector sx={{ bgcolor: "secondary.main" }} />}
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography
                        variant="h6"
                        component="span"
                        className={`paso ${index <= currentStep ? "visible" : "blurry"}`}
                      >
                        {paso.trim()}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </AccordionDetails>
          </Accordion>
        </div>
      </DialogContent>
      <DialogActions style={dialogActionsStyle}>
        <Button onClick={handleClose} variant="blackText">Cerrar</Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleProgress}
          disabled={currentStep >= pasos.length - 1}
        >
          Progresar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RecipeDetailsDialog;

// Archivo: markAsFavorite.js
export const markAsFavorite = async (idReceta, currentUser) => {
    try {
      const response = await fetch('http://localhost:3001/receta/marcarFavorita', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idReceta, correo: currentUser }),
      });
  
      if (!response.ok) throw new Error(`No se pudo marcar la receta ${idReceta} como favorita`);
  
      console.log(`Receta con id ${idReceta} marcada como favorita`);
    } catch (error) {
      console.error('Error al marcar como favorita:', error);
    }
  };
  
<div align="center">
	
# **REPERTORIO DE RECETAS**
  
Wong Mestas A. Yin Len -  Bazan Sanchez Javier Emilio - Aguilar Uribe J. David  - García Velasco Erick Iram - José Luis López Bautista 

</div>
  
> <b>PROBLEM STATEMENT</b>
	<div>
	Un recetario que le dé al usuario opciones de platillos tomando en cuenta en los ingredientes disponibles en su cocina, sus gustos, alergias y estado de salud. Solucionando problemas típicos en la cocina como el desperdicio de ingredientes, no lograr controlar la dieta y no saber qué cocinar. 
	<div>
	
 <div>
	
 ### DESCRIPCIÓN DEL SISTEMA
	
<div>	

		    
En la aplicación, los ingredientes se agregan a la cocina mediante un buscador que muestra coincidencias de lo que escribe el usuario con los alimentos contemplados. El usuario especifica la cantidad, ya sea en piezas, gramos o mililitros, según corresponda. Esta información se solicita al usuario durante el proceso de registro de ingredientes.

Por defecto, todos los electrodomésticos se consideran disponibles en la cocina del usuario. Sin embargo, el usuario puede deseleccionar aquellos electrodomésticos que no posea.

Los datos del usuario son opcionales y se utilizan para filtrar las recetas según sus objetivos alimenticios. Estos datos incluyen peso, altura, nivel de actividad física, así como información sobre enfermedades y alergias alimentarias.

La aplicación proporciona al menos una receta que se pueda realizar con los ingredientes y electrodomésticos disponibles en la cocina del usuario. Se omiten aquellas recetas que contienen alimentos no aptos para el usuario o que no cumplen con sus objetivos alimenticios. Una vez que se prepara la receta, los ingredientes utilizados se eliminan del registro del usuario.

Si no se encuentra al menos una receta que cumpla con los criterios mencionados, la aplicación ofrece una receta que incluya los ingredientes disponibles en la cocina del usuario y el mínimo número de ingredientes faltantes. Además, la aplicación puede generar una lista de compras para los ingredientes que falten, facilitando al usuario conseguirlos sin que se olvide de alguno.

Los usuarios pueden filtrar las recetas por ingrediente o tipo de comida, lo que les permite encontrar recetas que utilicen ingredientes específicos o que correspondan a ciertos tipos de cocina, como comidas de distintas nacionalidades o con características específicas, por ejemplo, picante, salado, dulce, KETO, vegano, etc.

Además, los usuarios tienen la opción de marcar recetas como favoritas, lo que facilita su búsqueda en el futuro. Estas recetas marcadas como favoritas se muestran primero antes que otras opciones al usuario. También pueden registrar sus propias recetas en la aplicación, que se incluyen en el repertorio de la aplicación y se tienen en cuenta al proporcionar recetas al usuario.

Si el usuario decide no registrar sus ingredientes, tiene la opción de utilizar un buscador que muestra todas las recetas disponibles en la aplicación. Si la receta buscada no se encuentra, la aplicación sugiere otras opciones al usuario.

</div>
</div>


<div>
		
### Casos de uso

ej. Se tiene una cocina con los siguientes productos:

<div style="margin: 0 auto;">
	
<b>Ingredientes:</b>  

1 kg Pan para empanizar, 10 pz Huevo, 500 gr Pechuga de pollo, 200 gr Tocino, 200 gr Harina,  5 pz Platano, 250 gr Queso Panela.  

**Electrodomesticos:** 

Refrigerador, estufa, horno, licuadora 

</div>

1. **Agregar manualmente ingredientes.** ***IMPORTANTE***

	Cada uno de los **ingredientes** anteriores se tendrán que registrar  en el sistema, es decir, se tendrá que escribir el **nombre** de cada uno y selecionar la **cantidad** con la que se dispone.

2. **Activar o desactivar electrodomesticos.** ***IMPORTANTE***

   	El sistema por default dirá que la cocina esta perfectamente equipada. En este caso, digamos que el usuario selecciona la receta para preparar nuggets de pollo, la cual requiere del **uso de una freidora de aire**, pero en su cocina **no dispone de una**, entonces deberá ir al la sección de configuración y **desactivar la opción de freidora de aire**, de modo que ahora se omitirán las recetas que utilicen freidora de aire, o en su caso se le recomendará sustituir la freidora de aire por el horno, del cual sí dispone.
    
3. **Filtrar recetas con base a sus gustos.**

	El usuario despertó con el antojo de comida tailandesa. En este caso, podría usar los filtros que ofrece la aplicación para que, tomando en cuenta los ingredientes que tiene, la aplicación muestre sugerencias de comida de este tipo. Si está pensando en hacer el super, podría simplemente usar el buscador de recetas para que muestre todos los platillos tailandeses que están disponibles en la aplicación, usar la función de lista de compras para guardar los ingredientes necesarios y tomar esto como referencia en el super. 

	Si el usuario tiene tocino desde hace 5 días en el refrigerador y quiere una receta que utilice tocino, nuevamente podría utilizar los filtros para mostrar sólo recetas que lleven tocino. 

	Y si el usuario quiere platillos tailandeses que lleven tocino, también puede usar los filtros para obtener recetas con estas características.

   
4. **Generar una lista de ingredientes**

 	El usuario se inscribió a un gimnasio y quiere cocinar platillos que sean bajos en grasas o calorías. Entonces encuentra en la aplicación la receta para cocinar nuggets de pollo fit,  que pide harina de avena y avena, pero solo tiene harina normal y pan para empanizar (no muy fit de su parte), en este caso el sistema creará una lista de compras donde se incluya harina de avena y avena, y fácilmene con esta lista podrá **ir a comprar todos los ingredientes necesaros** sin olvidar ninguno.
   
5. **Marcar como favorito alguna receta de su gusto.**

   	La receta de chimichangas fue mejor de lo que el usuario esperaba y quiere volver a cocinarla en un futuro, entonces para no perder la receta podrá **marcarla como favorita** y asi cuando tenga nuevamente todos los ingredientes, el sistema la proporcionará como una de las primeras opciones para cocinar.
    
6. **Escribir recetas propias.**

 	El usuario tiene una receta para cocinar brownie de chocolate sin harina, también usa una cantidad minima de chocolate y una cantidad excesiva de crema de mani, además de que le gusta agregarle maracuya; pero en el repertorio no encuentra una receta igual. Es ahí cuando la función de agregar recetas le resultará muy útil.
 	

8. **Buscar una receta.**

 	La receta de Pollo Kung Pao le resulta muy buena al usuario para un fin de semana en familia, pero entre tanta receta que ocupa pollo no encuntra el Pollo Kung Pao, entonces puede buscar desde la aplicación la receta de Pollo Kung Pao, siempre y cuando esta este en el repertorio de recetas.




</div>

### Wireframes


#### Inicio de sesión: 
![Inicio de sesión](/Wireframe/WF-VistaSeparada/WF-InicioSesion.png)

#### Añadir ingredientes:
![Ingredientes](/Wireframe/WF-VistaSeparada/WF-PaginaPrincipal.png)

#### Repertorio de recetas:
![Repertorio de recetas](/Wireframe/WF-VistaSeparada/WF-Repertorio.png)

#### Filtar recetas:
![Repertorio de recetas](/Wireframe/WF-VistaSeparada/WF-Filtrar.png)

#### Características de una receta: 
![Receta](/Wireframe/WF-VistaSeparada/WF-Receta.png)

####  Generar lista: 
![Receta](/Wireframe/WF-VistaSeparada/WF-GenerarLista.png)

#### Configuración general:
![Configuración](/Wireframe/WF-VistaSeparada/WF-Perfil.png)

#### Configuración de los electrodomésticos:
![Electrodomésticos](/Wireframe/WF-VistaSeparada/WF-Electrodomestico.png)

#### Configuración de los datos:
![Electrodomésticos](/Wireframe/WF-VistaSeparada/WF-Datos.png)

#### Flujo entre vistas:
![Flujo](/Wireframe/WF-FlujoVistas.png)

</div>  

  

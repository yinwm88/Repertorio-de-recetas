<div align="center">
	
# **REPERTORIO DE RECETAS**
  
Wong Mestas A. Yin Len -  Bazan Sanchez Javier Emilio - Aguilar Uribe J. David  - García Velasco Erick Iram - José Luis López Bautista 


</div>

<div align="center">
  
![Ratatouille](GIF/a6ebc357ef9823560fdd0500f2ebff1b.gif)</div>

<div>
  
> <b>PROBLEM STATEMENTS</b>
    <div>
>  - Dejar dsperdiciar ingredientes por nunca utilizarlos.
>  - No tener una dieta controlada (padecimeintos, alergias, calorías).
>  - Bloqueo culinario: No saber que cocinar.
   </div>


<div>
	
 <div>
	
 ### DESCRIPCIÓN DEL SISTEMA
	
<div>	

El software tiene la capacidad de:
		    
1. **Registrar cada ingrediente de la cocina.**
   
	Los ingredientes se agregarán a la cocina mediante un buscador que muestra coincidencias de lo que escribe el usuario con ingredientes contemplados en la aplicación. Dependiendo del alimento, la cantidad se representará en piezas, gramos o mililitros, información que también se le solicitará al usuario.
	   
2. **Registrar los electrodomésticos disponibles.**
   
	Por default se tiene que todos los electrodomesticos están disponibles en la cocina del usuario; de no ser el caso, el usuario deseleccionará aquellos con los que no disponga en la cocina.
	
3. **Registrar datos del usuario.**
   
	Los cuales serán usados para filtrar las recetas respecto a su objetivo alimenticio y son opcionales. Estos datos serán:
	- *peso*
	- *talla*
	- *actividad fisica*
	- *enfermedades*
	- *alergias*
		
4. **Proporcionar ***al menos*** una receta que se pueda realizar con los ingredientes y electrodomésticos.**

	Se omitirán aquellas recetas que contengan algún alimento que el usuario no pueda ingerir o aquellas que no cumplan con su objetivo alimenticio. Para eso son los datos del punto anterior. Si se prepara la receta, se eliminarán los ingredientes del registro del usuario.

De no encontrarse al menos una receta, o si el usuario así lo decide:

5. **Se dará la receta que contenga los ingredientes disponibles en su cocina más el ***mínimo número*** de ingredientes con los que no se cuenta.**
   
   Para los ingredientes con los que no se cuenta, la aplicación puede generar una lista de compras para que el usuario no olvide lo que necesita.
	
6. **Filtrar recetar por  ingrediente o tipo de comida.**
   
 	 Esto permite que el usuario obtenga una receta donde se utilice algún ingrediente en específico o el tipo de comida que prefiera.
   
  	 Los tipos de comida pueden ser desde comidas de alguna nacionalidad (la aplicacion daría la ventaja de cocinar recetas de otros paises) hasta comidas con 	alguna caracteristica en especifico; como pueden ser comida picosa, salada, dulce, KETO, vegana, etc.
	
7. **Marcar como favorito alguna receta.**
	
 	Esto para encontrar con mayor facilidad alguna receta en el repertorio y de contar con los ingredientes necesarios mostrarla en un apartado de recetas 	   favoritas antes de las demás posibles opciones de recetas.
	
8. **Registrar una receta del usuario.**
    
	Esto permitirá al usuario incluir sus recetas familiares en el repertorio para que estas se puedan tomar en cuenta al momento de proporcionarle recetas. 
   
9. **Buscar entre todas las recetas disponibles.**
    
	Si el usuario decide no registrar sus ingredientes, tiene la opción de utilizar un buscador que puede mostrar todas las recetas disponibles en la aplicación. Si la receta que está buscando no se encuentra, la aplicación sugiere otras opciones.

</div>
</div>


<div>
		
### ACTIVIDADES QUE EL USUARIO PUEDE HACER

ej. Se tiene una cocina con los siguientes productos:

<div style="margin: 0 auto;">
	
| Ingredientes | Electrodomesticos |
|:-----------:|:-----------:|
| 1 kg Pan para empanizar   | Refrigerador   |
| 10 pz Huevo   | Estufa   |
| 500 gr Pechuga de pollo   | Horno   |
| 500 gr Garbanzo   | Licuadora   |
| 200 gr Tocino    |   |
| 200 gr Harina  |   |
| 5 pz Platano  |   |
| 250 gr Queso Panela  |   |
</div>

1. **Agregar manualmente ingredientes.** ***IMPORTANTE***

	Cada uno de los **ingredientes** anteriores se tendrán que registrar  en el sistema, es decir, se tendrá que escribir el **nombre** de cada uno y selecionar la **cantidad** con la que se dispone.

2. **Activar o desactivar electrodomesticos.** ***IMPORTANTE***

   	El sistema por default dirá que la cocina esta perfectamente equipada. En este caso, digamos que se selecciona la receta para preparar nuggets de pollo la cual requiere del **uso de una freidora de aire**, pero en nuestra cocina **no disponemos de una**, entonces deberemos ir al la sección de configuración y **desactivar la opción de freidora de aire**, de modo que ahora se omitirán las recetas que utilicen freidora de aire, o en su caso se te recomendará sustituir la freidora de aire por el horno del cual si disponemos.
    
3. **Filtrar recetas con base a sus gustos.**

	El usuario despertó con el antojo de comida tailandesa. En este caso, podría usar los filtros que ofrece la aplicación para que, tomando en cuenta los ingredientes de los que dispone, la aplicación muestre sugerencias de comida de este tipo. Si está pensando en hacer el super, podría simplemente usar el buscador de recetas para que muestre todos los platillos tailandeses que están disponibles en la aplicación, usar la función de lista de compras para guardar los ingredientes necesarios y tomar esto como referencia en el super. 

	Si el usuario tiene tocino desde hace 5 días en el refrigerador y quiere una receta que utilice tocino, nuevamente podría utilizar los filtros para mostrar sólo recetas que lleven tocino. 

	Y si el usuario quiere platillos tailandeses que lleven tocino, también puede usar los filtros para obtener recetas con estas características.

   
4. **Generar una lista de ingredientes**

 	Resulta que nos inscribimos a un gimnasio y queremos cocinar platillos que sean bajos en grasas o calorías. Entonces encontramos en la aplicación la receta para cocinar nuggets de pollo fit, nos piden harina de avena y avena, pero nosotros tenemos harina normal y pan para empanizar (nada Fit que digamos), en este caso el sistema nos creara una lista de compras donde incluya harina de avena y avena, y fácilmene con esta lista generada automaticamente por el sistema, podremos **ir a comprar todos los ingredientes necesaros** sin olvidar ninguno.
   
5. **Marcar como favorito alguna receta de su gusto.**

   	La receta de chimichangas fue mejor de lo que esperamos y queremos volver a cocinarla nuevamente en un futuro, entonces para no perder la receta se podrá **marcar como receta favorita** y asi cuando se tengan nuevamente todos los ingredientes para este platillo, el sistema nos la proporcionará como una de las primeras opciones para cocinar.
    
6. **Escribir recetas propias.**

 	Tengo una receta para cocinar brownie de chocolate sin usar harina y usa una cantidad minima de chocolate y una cantidad excesiva de crema de mani, además de que me gusta agregarle maracuya; pero en el repertorio no encuentro una receta igual. Es ahí cuando la función de escribir tus propias recetas es muy útil.
 	

8. **Buscar una receta.**

 	Planee cocinar Pollo Kung Pao un fin de semana, pero entre tanta receta que ocupa pollo no encuntro el Pollo Kung Pao, entonces se puede buscar desde la aplicación la receta de Pollo Kung Pao, siempre y cuando esta este en el repertorio de recetas.


    

</div>
	

</div>  

  

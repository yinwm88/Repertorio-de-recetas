<div align="center">
	
# **REPERTORIO DE RECETAS**
  
Wong Mestas A. Yin Len -  Bazan Sanchez Javier Emilio - Aguilar Uribe J. David  - Nombre  - Nombre 


</div>

<div align="center">
  
![Ratatouille](GIF/a6ebc357ef9823560fdd0500f2ebff1b.gif)</div>

<div>
  
> <b>PROBLEM STATEMENTS</b>
    <div>
>  - Desperdiciar ingredientes por nunca utilizarse.
>  - No tener una dieta controlada (padecimeintos, alergias, calorías, ...).
>  - Quedarse sin ideas de que preparar de comer.
>  - ...
   </div>


<div>
	
## ESPECIFICACIONES TÉCNICAS
	
 <div>
	
 ### DESCRIPCIÓN DEL SISTEMA
	
<div>	

El software tiene la capacidad de:
		    
1. **Registrar cada ingrediente de la cocina.**
   
	Estos serán registrados manualmente.
	   
2. **Registrar los electrodomésticos disponibles.**
   
	Por default se tiene que todos los electrodomesticos están disponibles en la cocina del usuario; de ser el caso, el usuario deseleccionará aquellos 	     	con los que no disponga en la cocina.
	
3. **Registrar datos del usuario.**
   
	Los cuales serán usados para filtrar las recetas respecto a su objetivo alimenticio.Estos datos serán:
	- *peso*
	- *talla*
	- *actividad fisica*
	- *enfermedades*
	- *alergias*
		
4. **Proporcionar ***al menos*** una o más recetas que se pueden realizar en esa cocina.**

	Se omitirán aquellas recetas que contengan algún alimento que el usuario no pueda ingerir, como aquellas que no cumplan con su objetivo alimenticio.

De no encontrarse al menos  una  receta:

5. **Se dará la receta que contenga los ingredientes disponibles en su cocina más el ***mínimo número*** de ingredientes con los que no se cuenta.**
   
   Para los ingredientes con los que no se cuenta:
   
   	1. Se le mostrarán opciones con los que se pueden sustituir.
   	2. Ó de plano se le hará una lista de compras en Walmart Express, o alguna tienda en línea, de los ingredientes que le falten.
	
6. **Filtrar recetar por  ingrediente o tipo de comida.**
   
 	 Esto permitira centrarse nada más en aquellas recetas que tengan entre sus ingredientes el ingrediente especifico a utilizar. O centrarse en aquellas 	   recetas que sean del tipo de comida seleccionado.
   
  	 Los tipos pueden ser desde comidas de alguna nacionalidad (la aplicacion daría la ventaja de cocinar recetas de otros paises) hasta comidas con 		   alguna caracteristica en especifico; como pueden ser comida picosa, salada, dulce, KETO, vegana, etc.
	
7. **Marcar como favorito alguna receta.**
	
 	Esto para encontrar con mayor facilidad alguna receta en el repertorio y de contar con los ingredientes necesarios mostrarla en un apartado de recetas 	   favoritas antes de las demás posibles opciones de recetas.
	
8. **Registrar una receta del usuario.**
    
	Esto permitirá al usuario incluir sus recetas familiares en el repertorio para que estas se puedan tomar en cuenta al momento de proporcionarle recetas. 
   
9. **Dar acceso a algun buscador para que el usuario pueda buscar una receta específica.**
    
	El buscador (por ejemplo Google) estara enlazado a la aplicacion, de manera que si no se cuentan con todos los ingredientes, entonces se generará una 	  lista de compras o se le proporcionaran los ingredientes disponibles con los que se pueden sustituir.

</div>
</div>


<div>
		
### ACTIVIDADES QUE EL USUARIO PUEDE HACER

Se tiene una cocina con los siguientes productos:

<div aling="center">
	
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

1. **Agregar manualmente ingredientes.**

	Cada uno de los **ingredientes** anteriores se tendrán que registrar manualmente en el sistema, es decir, se tendrá que escribir el nombre de cada uno, así como selecionar la cantidad con la que se dispone.

2. **Activar o desactivar electrodomesticos de la cocina.**

   	El sistema por default dirá que la cocina esta perfectamente equipada. En este caso, digamos que se selecciona la receta para preparar nuggets de pollo la cual requiere del **uso de una freidora de aire**, pero en nuestra cocina **no disponemos de una**, entonces deberemos ir al la sección de configuración y **desactivar la opción de Freidora de aire**, de modo que ahora se omitirán las recetas que utilicen freidora de aire, o en su caso se te recomendará sustituir la freidora de aire por el horno del cual si disponemos.
    
3. **Filtrar recetas con base a sus gustos.**

	Tenemos los ingredientes necesarios para hacer nuggets de pollo, pero también queremos usar el tocino, entonces basta con filtrar la receta por ingrediente y seleccionar el tocino como ingrediente para ahora tener nuggets de pollo y tocino.

 	O si lo que queremos es que los nuggets sean veganos, entonces en de vez de filtrar por ingrediente, filtramos  por tipo de comida y de esa manera obtenemos la receta de nuggets de garbanzo.
   
4. **Comprar en linea la lista de ingredientes generada.**

 	Resulta que nos inscribimos a un gimnasio y para cocinar nuggets de pollo fit, nos piden harina de avena y avena, pero nosotros tenemos harina normal y pan para empanizar (nada Fit que digamos), en este caso el sistema nos creara una lista de compras donde incluya harina de avena y avena, y fácilmene con esta lista generada automaticamente por el sistema, podremos comprar todos los ingredientes necesaros sin olvidar ninguno.
   
5. **Marcar como favorito alguna receta de su gusto.**

   	La receta de nuggets de garbanzo fue mejor de lo que esperamos y queremos volver a cocinarla nuevamente en un futuro, entonces para no perder la receta se podrá **marcar como receta favorita** y asi cuando se tengan nuevamente todos los ingredientes  para los nuggets de garbanzo el sistema nos la  proporcionará como una de las primeras opciones para cocinar.
    
6. **Escribir recetas propias.**

 
	
 	

7. **Buscar una receta.**

 	Planee cocinar Pollo Kung Pao un fin de semana, pero entre tanta receta que ocupa pollo no encuntro el Pollo Kung Pao, entonces se puede buscar desde la aplicación la receta de Pollo Kung Pao.

	La diferencia con buscarlo directamente desde el navegador radica en que si se te olvidó algún ingrediente la aplicación te recomienda sustituirlo con alguno disponible en tu cocina o te hace una lista de compras sin olvidar agregar ningún ingrediente faltante. 
    

</div>
	
Correo Canek:contornos reticulares[1]  (wireframes) de la vista que tendrá el sistema; y casos de uso también en español coloquial, pero que cubran la mayor cantidad posible de actividades realizables. Apreciaremos que sean concisos."
	
	

</div>  

  

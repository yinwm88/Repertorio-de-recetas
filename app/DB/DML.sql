insert into Electrodomestico (nombre) values ('Refrigerador');
insert into Electrodomestico (nombre) values ('Horno');
insert into Electrodomestico (nombre) values ('Licuadora');
insert into Electrodomestico (nombre) values ('Microondas');
insert into Electrodomestico (nombre) values ('Estufa');
insert into Electrodomestico (nombre) values ('Batidora');
insert into Electrodomestico (nombre, sustituto) values ('Freidora', 5);
insert into Electrodomestico (nombre, sustituto) values ('Freidora de aire', 5);
insert into Electrodomestico (nombre) values ('Tostador');

insert into Receta(nombre, proceso) values ('Burrito', 'Corta el pimiento, el jitomate y la cebolla en dados y saltea. Agrega la carne. Sazona y cocina hasta que se dore o esté completamente cocido. Calienta la tortilla y coloca una pequeña capa de queso y el relleno de carne que has preparado en el paso enterior en la mitad inferior de la tortilla. Envuelve doblando la parte inferior sobre el relleno, doblando los lados hacia adentro y luego enrollando. Fríe usando tu método preferido como freidora de aire, si eliges esta tendrás que dejarlo dentro unos 10 minutos; si lo harás con sarten, usa solo un chorrito de aceite y voltea hacia los lados hasta que veas un color dorado en la tortilla. Agrega la crema agria encima. Puedes servir con salsa y queso rallado.');
insert into Ingrediente(nombre, unidad,  caduca) values ('Carne de res', 'gr', true);
insert into Ingrediente(nombre, unidad,  caduca) values ('Cebolla', 'pz', true);
insert into Ingrediente(nombre, unidad,  caduca) values ('Jitomate', 'pz', true);
insert into Ingrediente(nombre, unidad,  caduca) values ('Pimiento', 'pz', true);
insert into Ingrediente(nombre, unidad,  caduca) values ('Tortilla', 'pz', true);
insert into Ingrediente(nombre, unidad,  caduca) values ('Crema agria', 'gr', true);
insert into Ingrediente(nombre, unidad,  caduca) values ('Queso Oaxaca', 'gr', true);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (1, 1, 85);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (1, 2, 1);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (1, 3, 1);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (1, 4, 1);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (1, 5, 1);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (1, 6, 30);
insert into haberIngrediente(idReceta, idIngrediente, cantidad) values (1, 7, 100);
insert into necesitar(idReceta, idElectro) values (1,5);
insert into necesitar(idReceta, idElectro) values (1,8);
insert into tipoReceta(idReceta, tipo) values (1, 'Mexicana');


insert into Receta(nombre, proceso) values ('Ginataag Kalabasa - Calabaza en leche de coco', 'Remueve las semillas de media la calabaza, pélala y córtala en cubos grandes. Ponla a un lado. Corta la cebolla y el ajo, y cocínalos en una olla con aceite hasta que estén translúcidos. Agrega las latas de leche de coco y los cubos de calabaza a la olla. Deja cocinar a fuego lento hasta que la calabaza esté suave. Cuando la calabaza esté suave, machaca aproximadamente la mitad con un machacador de papas, dejando el resto en cubos. Retira del fuego y sirve sobre arroz.');
insert into Ingrediente(nombre, unidad, caduca) values ('Calabaza', 'gr', true);
insert into Ingrediente(nombre, unidad, caduca) values ('Leche de coco (lata)', 'ml', false);
insert into Ingrediente(nombre, unidad, caduca) values ('Dientes de ajo', 'pz', true);


insert into Receta(nombre, proceso) values ('Tabouleh - Tabulé', 'Remoja el trigo partido en el agua caliente hasta que el agua sea absorbida, aproximadamente 30 minutos, luego escurre cualquier exceso de agua, si es necesario, y exprime bien. Combina los ingredientes de la ensalada (todo excepto los ingredientes del aderezo) en un bol mediano. Mezcla los ingredientes del aderezo y revuelve en la mezcla de ensalada. Finalmente, sirve la ensalada fría o a temperatura ambiente.');
insert into Ingrediente(nombre, unidad,  caduca) values ('Trigo partido', 'gr', true);
insert into Ingrediente(nombre, unidad,  caduca) values ('Pepino', 'pz', true);
insert into Ingrediente(nombre, unidad,  caduca) values ('Cebolla cambray', 'mjo', true);
insert into Ingrediente(nombre, unidad,  caduca) values ('Hierbabuena', 'gr', true);
insert into Ingrediente(nombre, unidad,  caduca) values ('Perejil', 'mjo', true);
insert into Ingrediente(nombre, unidad,  caduca) values ('Jugo de Limón', 'ml', true);
insert into Ingrediente(nombre, unidad,  caduca) values ('Aceite de oliva', 'ml', false);
insert into Ingrediente(nombre, unidad,  caduca) values ('Pimienta', 'gr', false);
insert into Ingrediente(nombre, unidad,  caduca) values ('Sal', 'gr', false);


insert into Usuario (correo, nombre, apellido, peso, talla, actividad, objetivo, contrasena) values ('asies@gmail.com', 'Gonzalo', 'López', 80, 1.78, 'Sedentario', 'bajar de peso', '1234abcd');
insert into Usuario (correo, nombre, apellido, peso, talla, actividad, objetivo, contrasena) values ('marco-gg@gmail.com', 'Marco', 'Gomez', 70, 1.70, 'Activo', 'mantener peso', 'qwerty');

select nombre from haberingrediente natural join ingrediente
where idreceta = 1;
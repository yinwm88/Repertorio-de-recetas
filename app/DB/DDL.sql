DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA public;


create type objetivos as enum ('bajar de peso', 'mantener peso', 'subir de peso', 'no comer');  
create table Usuario (
	correo Varchar(70),	
	nombre Varchar(50),
	apellido Varchar(50),
	peso numeric(5,2),
	talla numeric(5,2),
	actividad text,
    objetivo objetivos,
    contrasena varchar(200),
    salt varchar(200),
    verificado bool default FALSE
); 

alter table Usuario alter column correo set not null;
alter table Usuario alter column nombre set not null;
alter table Usuario alter column apellido set not null;
alter table Usuario alter column contrasena set not null;

alter table Usuario add constraint nombreC1 check(nombre <> ' ');
alter table Usuario add constraint nombreC2 check(apellido <> ' ');
alter table Usuario add constraint nombreC3 check(nombre ~ '^[a-zÑñA-ZáéíóúÁÉÍÓÚüÜ ]*$');
alter table Usuario add constraint nombreC4 check(apellido ~ '^[a-zÑñA-ZáéíóúÁÉÍÓÚüÜ ]*$');
alter table Usuario add constraint peso check( peso >= 0);
alter table Usuario add constraint talla check( talla >= 0);
alter table Usuario add constraint correoVerifica check( correo  ~* '^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$');
alter table Usuario add constraint pkUsuario primary key(correo);


create table Electrodomestico ( 
	idElectro serial,
	nombre varchar(50),
	sustituto int,
	icono Varchar(60)
);
alter table Electrodomestico alter column idElectro set not null;
alter table Electrodomestico alter column nombre set not null;

alter table Electrodomestico add constraint nombreElectro unique(nombre);
alter table Electrodomestico add constraint pkElectro primary key(idElectro);

 

create table Receta ( 
	idReceta serial,
	correo Varchar(70),
	imagen Varchar(300),
	nombre varchar(50),
	tiempo int,
	proceso text,
	likes int default 0,
	padre int
);

alter table Receta alter column idReceta set not null;
alter table Receta alter column nombre set not null;
alter table Receta alter column proceso set not null;

alter table Receta add constraint pkReceta primary key(idReceta);
alter table Receta add constraint nombreRecetaC1 check(nombre <> ' ');
alter table Receta add constraint nombreRecetaC2 check(nombre ~ '^[a-zÑñA-ZáéíóúÁÉÍÓÚüÜ -]*$');
alter table Receta add constraint fkRecetaVariacion foreign key(padre) references Receta(idReceta)
on update cascade on delete cascade;
alter table Receta add constraint fkRecetaUsario foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;

create table Ingrediente (
	idIngrediente serial,
	nombre Varchar(50),
	unidad Varchar(5),
	caduca boolean,
	calorias int
);

alter table Ingrediente alter column idIngrediente set not null;
alter table Ingrediente alter column nombre set not null;
alter table Ingrediente alter column unidad set not null;
alter table Ingrediente alter column caduca set not null;
alter table Ingrediente alter column calorias set not null;

alter table Ingrediente add constraint pkIngrediente primary key(idIngrediente);

create table Poseer (
    idElectro int,
    correo varchar(70)
);
alter table Poseer alter column idElectro set not null;
alter table Poseer alter column correo set not null;

alter table Poseer add constraint uniquePoseer  unique(correo, idElectro);
alter table Poseer add constraint fkPoseerUsua foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;
alter table Poseer add constraint fkPoseerElect foreign key(idElectro) references Electrodomestico(idElectro)
on update cascade on delete cascade;


create table Necesitar (
    idElectro int,
    idReceta int
);
alter table Necesitar alter column idElectro set not null;
alter table Necesitar alter column idReceta set not null;

alter table Necesitar add constraint uniqueNecesitar  unique(idElectro,idReceta);
alter table Necesitar add constraint fkNecesitarReceta foreign key(idReceta) references Receta(idReceta)
on update cascade on delete cascade;
alter table Necesitar  add constraint fkNecesitarElect foreign key(idElectro) references Electrodomestico(idElectro)
on update cascade on delete cascade;


create type caracteristicas as enum ('baja en azucar','alta en azucar', 'sin gluten','alta en grasas', 'baja en grasas');  
create table CaracteristicasReceta (
    idReceta int,
    caracteristica caracteristicas
);
alter table CaracteristicasReceta alter column idReceta set not null;
alter table CaracteristicasReceta alter column caracteristica set not null;

alter table CaracteristicasReceta add constraint pkCaracteristica primary key(idReceta, caracteristica);
alter table CaracteristicasReceta add constraint fkCaracteristica foreign key(idReceta) references Receta(idReceta)
on update cascade on delete cascade;


create type tipos as enum ('Mexicana', 'Española', 'Japonesa', 'China', 'Vegana', 'Rápida', 'Saludable', 'Postre', 'Francesa', 'Bebida', 'Snack', 'Ensalada', 'Vegetariana', 'General', 'Filipina', 'Árabe', 'Italiana', 'Polaca','Mediterránea');  
create table TipoReceta (
    idReceta int,
    tipo tipos
);
alter table TipoReceta alter column idReceta set not null;
alter table TipoReceta alter column tipo set not null;

alter table TipoReceta add constraint pkTipo primary key(idReceta, tipo);
alter table TipoReceta add constraint fkTipo foreign key(idReceta) references Receta(idReceta)
on update cascade on delete cascade;
 


create table Preferir (
    correo Varchar(70),
    idReceta int
);
alter table Preferir alter column idReceta set not null;
alter table Preferir alter column correo set not null;

alter table Preferir add constraint uniquePreferir unique(correo,idReceta);
alter table Preferir add constraint fkPreferirC1 foreign key(idReceta) references Receta(idReceta)
on update cascade on delete cascade;
alter table Preferir add constraint fkPreferirC2 foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;



create table serAlergico(
	correo varchar(70),
	idIngrediente int
);

alter table serAlergico alter column correo set not null;
alter table serAlergico alter column idIngrediente set not null;

alter table serAlergico add constraint uniqueSerAlergico unique(correo,idIngrediente);
alter table serAlergico add constraint fkSerAlergico1 foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;
alter table serAlergico add constraint fkSerAlergico2 foreign key(idIngrediente) references Ingrediente(idIngrediente)
on update cascade on delete cascade;



create table haberIngrediente(
	idReceta serial,
	idIngrediente serial,
	cantidad int
);
alter table haberIngrediente alter column idReceta set not null;
alter table haberIngrediente alter column idIngrediente set not null;
alter table haberIngrediente alter column cantidad set not null;

alter table haberIngrediente add constraint uniqueHaberIngrediente1 unique(idReceta,idIngrediente);
alter table haberIngrediente add constraint fkHaberIngrediente1 foreign key(idReceta) references Receta(idReceta)
on update cascade on delete cascade;
alter table haberIngrediente add constraint fkHaberIngrediente2 foreign key(idIngrediente) references Ingrediente(idIngrediente)
on update cascade on delete cascade;
 

create table tenerIngrediente(
	correo varchar(70),
	idIngrediente int,
	cantidad numeric(10,2),
	fecha Date,
	fechaCaducidad Date
);
alter table tenerIngrediente alter column correo set not null;
alter table tenerIngrediente alter column idIngrediente set not null;
alter table tenerIngrediente alter column cantidad set not null;

-- alter table tenerIngrediente add constraint IngredienteCantidad check( cantidad > 0);
-- alter table tenerIngrediente add constraint fechaAgredado2 check(( fecha >= current_date ));
alter table tenerIngrediente add constraint uniqueTenerIngrediente unique(correo,idIngrediente);
alter table tenerIngrediente add constraint fkTenerIngrediente1 foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;
alter table tenerIngrediente add constraint fkTenerIngrediente2 foreign key(idIngrediente) references Ingrediente(idIngrediente)
on update cascade on delete cascade;

create table comprarIngrediente(
	correo varchar(70),
	idIngrediente int,
	cantidad numeric(10,2),
);

alter table comprarIngrediente alter column correo set not null;
alter table comprarIngrediente alter column idIngrediente set not null;
alter table comprarIngrediente alter column cantidad set not null;
alter table comprarIngrediente add constraint uniqueComprarIngrediente unique(correo,idIngrediente);
alter table comprarIngrediente add constraint fkComprarIngrediente1 foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;
alter table comprarIngrediente add constraint fkComprarIngrediente2 foreign key(idIngrediente) references Ingrediente(idIngrediente)
on update cascade on delete cascade;


create table cocinar(
	correo varchar(70),
	idReceta serial,
	calorias int,
	fecha Date
);
alter table cocinar alter column correo set not null;
alter table cocinar alter column idReceta set not null;
alter table cocinar alter column calorias set not null;
alter table cocinar alter column fecha set not null;
alter table cocinar add constraint fkCocinarCorreo foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;
alter table cocinar add constraint fkCocinarIdReceta foreign key(idReceta) references Receta(idReceta)
on update cascade on delete cascade;
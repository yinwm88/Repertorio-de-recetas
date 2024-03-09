DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA public;


create type objetivos as enum ('');  
create table Usuario (
	correo Varchar(70),	
	nombre Varchar(50),
	apellido Varchar(50),
	peso numeric(5,2),
	talla numeric(5,2),
	actividad text,
    objetivo objetivos,
    contrasena varchar(100) 
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
	sustituto varchar(50)
);
alter table Electrodomestico alter column idElectro set not null;
alter table Electrodomestico alter column nombre set not null;

alter table Electrodomestico add constraint nombreElectro unique(nombre);
alter table Electrodomestico add constraint pkElectro primary key(idElectro);

 

create table Receta ( 
	idReceta serial,
	nombre varchar(50),
	proceso text
);

alter table Receta alter column idReceta set not null;
alter table Receta alter column nombre set not null;
alter table Receta alter column proceso set not null;

alter table Receta add constraint pkReceta primary key(idReceta);
alter table Receta add constraint nombreRecetaC1 check(nombre <> ' ');
alter table Receta add constraint nombreRecetaC2 check(nombre ~ '^[a-zÑñA-ZáéíóúÁÉÍÓÚüÜ ]*$');


create table Procesado (
	idIngrediente serial,
	nombre Varchar(50),
	unidad Varchar(5),
	calorias int,
	fechaCaducidad Date
);

alter table Procesado alter column idIngrediente set not null;
alter table Procesado alter column nombre set not null;
alter table Procesado alter column unidad set not null;

alter table Procesado add constraint fecha check(( fechaCaducidad >= current_date ));
alter table Procesado add constraint pkProcesado primary key(idIngrediente);

 


create table NoProcesado (
	idIngrediente serial,
	nombre Varchar(50),
	unidad Varchar(5),
	calorias int
);


alter table NoProcesado alter column idIngrediente set not null;
alter table NoProcesado alter column nombre set not null;
alter table NoProcesado alter column unidad set not null;

alter table NoProcesado add constraint pkNoProcesado primary key(idIngrediente);



create table Poseer (
    idElectro int,
    correo varchar(70)
);
alter table Poseer alter column idElectro set not null;
alter table Poseer alter column correo set not null;

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


create type tipos as enum ('mexicana', 'china', 'vegana', 'rapida', 'saludable', 'postre', 'bebida', 'snack', 'ensalada', 'vegetariana', 'general');  
create table TipoReceta (
    idReceta int,
    tipo tipos
);
alter table TipoReceta alter column idReceta set not null;
alter table TipoReceta alter column tipo set not null;

alter table TipoReceta add constraint pkTipo primary key(idReceta, tipo);
alter table TipoReceta add constraint fkTipo foreign key(idReceta) references Receta(idReceta)
on update cascade on delete cascade;
 


create table Recomendar (
    correo Varchar(70),
    idReceta int
);
alter table Recomendar alter column idReceta set not null;
alter table Recomendar alter column correo set not null;

alter table Recomendar add constraint fkRecomendarC1 foreign key(idReceta) references Receta(idReceta)
on update cascade on delete cascade;
alter table Recomendar add constraint fkRecomendarC2 foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;



create table serAlergicoProcesado(
	correo varchar(70),
	idIngrediente int
);

alter table serAlergicoProcesado alter column correo set not null;
alter table serAlergicoProcesado alter column idIngrediente set not null;

alter table serAlergicoProcesado add constraint fkSerAlergico1 foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;
alter table serAlergicoProcesado add constraint fkSerAlergico2 foreign key(idIngrediente) references Procesado(idIngrediente)
on update cascade on delete cascade;



create table serAlergicoNoProcesado(
	correo varchar(70),
	idIngrediente int
);

alter table serAlergicoNoProcesado alter column correo set not null;
alter table serAlergicoNoProcesado alter column idIngrediente set not null;

alter table serAlergicoNoProcesado add constraint fkSerAlergico3 foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;
alter table serAlergicoNoProcesado add constraint fkSerAlergico4 foreign key(idIngrediente) references NoProcesado(idIngrediente)
on update cascade on delete cascade;



create table haberProcesado(
	correo varchar(70),
	idIngrediente int
);	

alter table haberProcesado alter column correo set not null;
alter table serAlergicoNoProcesado alter column idIngrediente set not null;

alter table haberProcesado add constraint fkHaberProcesado1 foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;
alter table haberProcesado add constraint fkHaberProcesado2 foreign key(idIngrediente) references Procesado(idIngrediente)
on update cascade on delete cascade;



create table haberNoProcesado(
	correo varchar(70),
	idIngrediente int
);
alter table haberNoProcesado alter column correo set not null;
alter table haberNoProcesado alter column idIngrediente set not null;
alter table haberNoProcesado add constraint fkHaberNoProcesado1 foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;
alter table haberNoProcesado add constraint fkHaberNoProcesado2 foreign key(idIngrediente) references NoProcesado(idIngrediente)
on update cascade on delete cascade;
 

create table tenerProcesado(
	correo varchar(70),
	idIngrediente int,
	cantidad numeric(5,2),
	fecha Date
);

alter table tenerProcesado alter column correo set not null;
alter table tenerProcesado alter column idIngrediente set not null;
alter table tenerProcesado alter column cantidad set not null;
alter table tenerProcesado alter column fecha set not null;

alter table tenerProcesado add constraint fkTenerProcesado1 foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;
alter table tenerProcesado add constraint fkTenerProcesado2 foreign key(idIngrediente) references Procesado(idIngrediente)
on update cascade on delete cascade;

create table tenerNoProcesado(
	correo varchar(70),
	idIngrediente int,
	cantidad numeric(5,2),
	fecha Date
);
alter table tenerNoProcesado alter column correo set not null;
alter table tenerNoProcesado alter column idIngrediente set not null;
alter table tenerNoProcesado alter column cantidad set not null;

alter table tenerNoProcesado add constraint fkTenerNoProcesado1 foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;
alter table tenerNoProcesado add constraint fkTenerNoProcesado2 foreign key(idIngrediente) references NoProcesado(idIngrediente)
on update cascade on delete cascade;


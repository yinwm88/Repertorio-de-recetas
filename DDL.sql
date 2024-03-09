--!Tabla Usuario
create type objetivos as enum ('');  
create table Usuario (
	correo Varchar(50),	
	nombre Varchar(50),
	APaterno Varchar(50),
	AMaterno Varchar(50),
	peso float8,
	talla float8,
	actividad text,
    objetivo objetivos
);



create table Procesado (
	idIngrediente serial,
	nombre Varchar(50),
	unidad Varchar(5),
	calorias int,
	fechaCaducidad Date
);



create table NoProcesado (
	idIngrediente serial,
	nombre Varchar(50),
	unidad Varchar(5),
	calorias int
);


create table Receta ( 
	idReceta serial,
	nombre varchar(50),
	proceso text
);



create table Electrodomestico ( 
	idElctrodomestico serial,
	nombre varchar(50),
	sustituto varchar(50)
);






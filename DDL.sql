--!Tabla Usuario
create type objetivos as enum ('');  
create table Usuario (
	correo Varchar(70),	
	nombre Varchar(50),
	APaterno Varchar(50),
	AMaterno Varchar(50),
	peso numeric(5,2),
	talla numeric(5,2),
	actividad text,
    objetivo objetivos,
    contrasena varchar(100) 
);
 

alter table Usuario alter column correo set not null;
alter table Usuario alter column nombre set not null;
alter table Usuario alter column APaterno set not null;
alter table Usuario alter column objetivo set not null;
alter table Usuario alter column contrasena set not null;

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

alter table Procesado add constraint fecha check(( fechaCaducidad <= current_date ));
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
alter table Necesitar alter column correo set not null;

alter table Necesitar add constraint fkNecesitarReceta foreign key(idReceta) references Receta(idReceta)
on update cascade on delete cascade;
alter table Necesitar  add constraint fkNecesitarElect foreign key(idElectro) references Electrodomestico(idElectro)
on update cascade on delete cascade;


create type caracteristicas as enum ('');  
create table CaracteristicasReceta (
    idReceta int,
    caracteristica caracteristicas
);
alter table CaracteristicasReceta alter column idReceta set not null;
alter table CaracteristicasReceta alter column caracteristica set not null;

alter table CaracteristicasReceta add constraint pkCaracteristica primary key(idReceta, caracteristica);
alter table CaracteristicasReceta add constraint fkCaracteristica foreign key(idReceta) references Receta(idReceta)
on update cascade on delete cascade;


create type tipos as enum ('');  
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

alter table Recomendar add constraint fkRecomendar foreign key(idReceta) references Receta(idReceta)
on update cascade on delete cascade;
alter table Recomendar add constraint fkRecomendar foreign key(correo) references Usuario(correo)
on update cascade on delete cascade;




 


 





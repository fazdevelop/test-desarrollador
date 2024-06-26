# Test-desarrollador

Para el formulario, decidí instalar React a traves de Vite debido a su simpleza y rapidez. El apartado del front-end esta principalmente en App.jsx. Por otra parte, el back-end lo trabajé con PHP, creando una carpeta llamada includes/config, en la cual he creado un archivo database para conectarme a la base de datos y otro archivo function para manejar las consultas y validaciones.

Para el modal, utilicé HTML, Bootstrap y Javascript nativo.

Desafío:

1. Cree un formulario que registre un usuario con los siguientes datos: (El stack a utilizar debe ser ReactJS de frontend y el backend
debe ser con un servicio REST con C# ASP.NET (ocupando MVC5), PHP o Laravel)
Nombre de usuario
- Password
- Fecha de nacimiento
- Fecha de creación
- Id de perfil
- Activo

Se debe tener presente que los datos fecha de creación y activo no deben ser consultados al usuario. Además, se deben listar
desde la base de datos los posibles perfiles.
Valida en el front que todos los datos se encuentren ingresados, que el formato de ingreso de la fecha sea DD-MM-YYYY.. Además, debe
validar en el lado del servidor los datos enviados. que la fecha de nacimiento no sea mayor a hoy, la password ingresada no contenga el
nombre de usuario y se de largo 10.

Querys para crear las tablas

```
1 -- Perfil
2 CREATE TABLE PERFIL(
3 id_perfil int primary key identity(1,1), -- valor autoincremental
4 nombre_perfil varchar(50)
5 );
6
7 INSERT INTO PERFIL(nombre_perfil) VALUES('ADMIN');
8 INSERT INTO PERFIL(nombre_perfil) VALUES('VISUALIZADOR');
9
10 -- Usuarios
11 CREATE TABLE USUARIO(
12 id_usuario int primary key identity(1,1), -- valor autoincrementable
13 nombre_usuario varchar(100) not null,
14 password varchar(100) not null,
15 fecha_nacimiento datetime,
16 fecha_creacion datetime,
17 id_perfil int FOREIGN KEY REFERENCES Perfil(id_perfil),
18 activo int
);
```

2. Cree un modal con bootstrap que contenga los siguientes elementos: (Ojo: no debe ser registrado en base de datos).

Posteriormente, al hacer click en Registrarme se abrirá otro modal que contenga los siguientes controles:
- Nombre
- Rut con DV
- Medicamento
- Email

Debes tener presente que Medicamento es un listado de medicamentos, de los cuales se debe seleccionar uno o muchos. Además, es
necesario lo siguiente:
- Agregar un botón que diga “Aceptar” y al presionarlo muestre un alert indicando los datos ingresados anteriormente
- Validar el dv del rut
- Validar que existan datos ingresados
- Validar formato de email
NOTA: Todo esto debe ser con HTML y Javascript (es valido usar JQuery).

# Backend "Delilah Restó", App de pedidos de comida

Trabajo #3 del curso de Desarrollo Web Full Stack de Acámica.

## Recursos y tecnologías utilizadas

- Node.js
- Nodemon
- Express
- JWT para autenticación via Token
- MySQL
- Sequelize
- Postman para manejo de endpoints y testing
- Swagger para documentación de API

El objetivo del trabajo es generar el backend de una app de pedidos de comida llamada Delilah Restó, generando la arquitectura, bases de datos relacionales, endpoints funcionales y documentación.

## Documentación de la API

Abrir el archivo `api-doc.yaml` y copiar su contenido en [Swagger](https://editor.swagger.io/) o importar el mismo desde las opciones

Se listarán los endpoints y métodos disponibles y la información necesaria para hacer uso de los mismos

## Instalación e inicializacion del proyecto



### 1 - Instalación de dependencias

```
npm install
```

### 3 - Creando base de datos

- Abrir XAMPP y asegurarse que el puerto sobre el cual se está ejecutando es el `3306`
- Inicializar los servicios de Apache y MySQL
- Abrir el panel de control del servicio MySQL
- Generar una nueva base de datos llamada `delilah_resto` desde el panel de control
### 4 - Iniciando el servidor

Desde la terminal poner el siguiente comando :

node server.js

### 5 - Listo para usar!

Testear los endpoints provistos desde postman para poder hacer uso de la API y base de datos generadas

(Asegurarse de seleccionar el entorno de desarrollo `Delilah Restó` para poder acceder a las variables globales)

Project #3 from the Full Stack Web Development career in Acámica.

## Resources and technologies used:

- Node.js
- Nodemon
- Express
- JWT for Token Authentication
- MySQL
- Sequelize
- Postman for endpoint handling & testing
- Swagger for API documentation

The goal of the project was to generate the backend for a food app called "Delilah Resto", generating the architecture, relational databases, functional endpoints and documentation for the project.

## API Documentation

Open the `swagger.yaml` file and copy it's content in [Swagger](https://editor.swagger.io/) or import it from the options panel.

A list of the available endpoints and methods will be listed with the necessary information to use the API

## Instalation and Project Initialization



### 1 - Install the required dependencies

```
npm install
```

### 3 - Creating the database

- Open XAMPP and make sure the port being used is number `3306`
- Start the Apache and MySQL services
- Open the Admin panel for the MySQL Service
- Create a new database called `delilah_resto` from the panel

### 4 - Starting the server

From the terminal put the following command:

node server.js

### 5 - It's ready to use!

You can now test the provided endpoints from the Postman collection to make use of the API and database connection

(Make sure the `Delilah Restó` enviroment is selected so you can access the enviroment variables)
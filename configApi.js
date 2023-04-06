const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'Andreani',
  server: 'NB101388',
  database: 'TareasDb',
  options: {
    trustedConnection: true,
    enableArithAbort: true
  }
};

sql.connect(config, (err) => {
  if (err) console.log(err);
});

const request = new sql.Request();
request.query('SELECT * FROM tu_tabla', (err, result) => {
  if (err) console.log(err);
  console.log(result);
});


/*
Descargar e instalar el paquete "mssql" mediante npm (Node Package Manager) 
utilizando el siguiente comando en la terminal:

npm install mssql


Importar el paquete en tu proyecto mediante

const sql = require('mssql');


Configurar la conexión con los detalles de tu base de datos en un objeto literal, 
que incluya el nombre del servidor, el nombre de la base de datos, el usuario y la contraseña:

const config = {
  user: 'tu_usuario',
  password: 'tu_contraseña',
  server: 'localhost',
  database: 'tu_base_de_datos',
  options: {
    trustedConnection: true,
    enableArithAbort: true
  }
};

Conectar a la base de datos utilizando el método connect() de la librería mssql:

sql.connect(config, (err) => {
  if (err) console.log(err);
});

Ejecutar una consulta a la base de datos utilizando el método query() de la librería mssql. 
Por ejemplo, para seleccionar todos los registros de una tabla:

const request = new sql.Request();
request.query('SELECT * FROM tu_tabla', (err, result) => {
  if (err) console.log(err);
  console.log(result);
});


*/ 


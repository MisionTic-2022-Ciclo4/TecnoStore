const express = require("express");
 

const recordClientes = express.Router();
 
// Conectar a la BD
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// Da toda la info disponible (Si dirve)
recordClientes.route("/TodosClientes").get(function (req, res) {
 let db_connect = dbo.getDb("employees");
 db_connect
   .collection("clientes")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordClientes.route("/InfoUnCliente/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("clientes")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 



// crear nuevo cliente (esta como mal esta)
recordClientes.route("/AgregarCliente").post(function (req, response) {
 let db_connect = dbo.getDb();
 let data1 = {
   nombre: req.body.nombre,
   apellido: req.body.apellido,
   direccion: req.body.direccion,
   telefono: req.body.telefono,
   correo: req.body.correo,
 };
 db_connect.collection("clientes").insertOne(data1, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});



 
// por id (Actualizar usuario)
recordClientes.route("/ActualizarCliente/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let data1 = {
   $set: {
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
    correo: req.body.correo,
   },
 };
 db_connect
   .collection("clientes")
   .updateOne(myquery, data1, function (err, res) {
     if (err) throw err;
     console.log("un dato modificado");
     response.json(res);
   });
});
 
// This section will help you delete a record
recordClientes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("clientes").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("Un dato borrado");
   response.json(obj);
 });
});
 
module.exports = recordClientes;
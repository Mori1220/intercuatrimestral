const express = require('express')
const  _ = require('underscore');
const Departamento = require('../models/departamento'); 
const app = express();

app.get('/departamento', function (req, res) {
    Departamento.find({ activo: true }).exec((err, departamentos) => {
       if(err){
           return res.status(400).json({
               ok: false,
               msg: 'Ocurrio un error al momento de consultar el departamento',
               err
           })
       }

       res.json({
           ok: true,
           msg: 'La lista de departamentos se obtuvo con exito',
           conteo: departamentos.length,
           departamentos
       })
    })
   })
 
 app.post('/departamento', function(req, res){
     let body = req.body;
     let dpto = new Departamento({
         id_jefe_de_area: body.id_jefe_de_area,
         nombre: body.nombre,
         numero_empleados: body.numero_empleados,
         extension_telefonica: body.extension_telefonica,


     })

     dpto.save((err, dptoDB) => {
         if(err) {
             return res.status(400).json({
                 ok: false,
                 msg: 'ocurrio un error',
                 err
             })
         }

         res.json({
             ok: true,
             msg: 'Se inserto el departamento correctamente',
             dptoDB
         })
     }) 
 })
 
 app.put('/departamento/:id', function(req, res){
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'numero_empleados', 'extension_telefonica']); 

    Departamento.findByIdAndUpdate(id, body,
        {new: true, runValidators: true, context: 'query'}, 
        (err, dptoDB) => {
           if(err) {
               return res.status(400).json({
                   ok: false,
                   msg: 'Ocurrio un error al actualizar',
                   err
               })
           }

           res.json({
               ok: true,
               msg: 'El departamento se actualizo con exito',
               departamento: dptoDB
           })
    })
 })
 
 app.delete('/departamento/:id', function(req, res){
   
 
let id = req.params.id;

Departamento.findByIdAndUpdate(id, 
   {activo: false}, {new: true, runValidators: true, context: 'query'}, 
   (err, dptoDB) => {
   if(err) {
       return res .status(400).json({
           ok: false,
           msg: 'Error al momento de eliminar',
           err
       })
   }
   
       res.json({
           ok: true,
           msg: 'Departamento eliminado con exito',
           dptoDB
       })
   })
})

module.exports = app;
const express = require('express')
const Usuario = require('../models/usuario'); //modelo
const app = express();

  app.get('/usuario', function (req, res) {
      res.json({
          ok: 200,
          msg: 'Usuarios consultados con exito'
      })
    })
  
  app.post('/usuario', function(req, res){
      let body = req.body;
      let usr = new Usuario({
          nombre: body.nombre,
          primer_apellido: body.primer_apellido,
          segundo_apellido: body.segundo_apellido,
          edad: body.edad,
          curp: body.curp,
          telefono: body.telefono,
          mail: body.mail
      })

      usr.save((err, usrDB) => {
          if(err) {
              return res.status(400).json({
                  ok: false,
                  msg: 'ocurrio un error',
                  err
              })
          }

          res.json({
              ok: true,
              msg: 'Se registro el usuario satisfactoriamente',
              usrDB
          })
      }) 
  })
  
  app.put('/usuario/:id/:nombre', function(req, res){
      let id = req.params.id
      let nombre = req.params.nombre
  
          res.json({
              ok: 200,
              msg: 'Usuario actualizado con exito',
              id: id,
              nombre:nombre
          }) 
  })
  
  app.delete('/usuario', function(req, res){
      let id = req.params.id;
  
      res.json({
          ok: 200,
          msg: 'Usuario eliminado satisfactoriamente',
          id:id
      })
  })

  module.exports = app;
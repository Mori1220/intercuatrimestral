require('./config/config')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/usuario', function (req, res) {
    get.json({
        ok:200,
        msg: 'Usuarios consultados con exito'
    })
  })

  app.post('/usuario',function(req, res){
    let nombre = req.body.nombre;
    let body = req.body;
   
if (nombre === undefined){
    res.status(400).json({
        ok:400,
        msg: 'Debes insertar el nombre'
    })
}else{
    res.json({
        ok:200,
        msg: 'Usuario insertado con exito',
        body:body
    })
}
    
    
app.put('/usuario/:id/:nombre', function(req, res ){
    let id = req.params.id
    let nombre = req.params.nombre

    })

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
        ok:200,
        msg: 'Usuario eliminado con exito',

    })
})

mongoose.connect('mongodb://localhost:27017/administracion', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    
},(err, res) => {
    if (err) throw err;
    console.log ('Base de datos ONLINE')
    
});

app.listen(process.env.PORT, () => {
    console.log('El servidor esta en linea en el puerto ', process.env.PORT)
})



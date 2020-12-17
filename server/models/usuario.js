const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Es necesario insertar el nombre']
    },
    primer_apellido: {
        type: String,
        required: [true, 'Es necesario insertar el primer apellido']
    },
    segundo_apellido: {
        type: String,
        required: [true, 'Es necesario insertar el sgundo apellido']
    },
    edad: {
        type: Number,
        required: [true, 'Es necesario insertar la edad']
    },
    curp: {
        type: String,
        required: [true, 'Es necesario insertar la CURP'],
        unique: true
    },
    telefono: {
        type: Number,
        required: [true, 'Es necesario insertar el telefono']
    },
    mail: {
        type: String,
        required: [true, 'Es necesario insertar el mail'],
        unique: true
    },
    activo: {
        type: Boolean,
        default: true
    }

})
 
module.exports = mongoose.model('Usuario', usuarioSchema);
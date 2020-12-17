
const mongoose = require('mongoose');


let Schema = mongoose.Schema;

let departamentoSchema = new Schema ({
    id_jefe_de_area: {
        type: String,
        required: [true, 'Es necesario insertar el id jefe ']
    },
    nombre: {
        type: String,
        required: [true, 'Es necesario insertar el nombre']
    },
    numero_empleados: {
        type: Number,
        required: [true, 'Es necesario insertar el numero de empleados']
    },
    extension_telefonica: {
        type: Number
       
    },
    activo: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Departamento', departamentoSchema);
import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    puesto: {
        type: String,
        required: true,
        enum: ['Desarrollador', 'Diseñador', 'Gerente', 'DevOps', 'QA', 'Administrador']
    },
    departamento: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    },
    fechaIngreso: {
        type: Date,
        default: Date.now
    },
    telefono: {
        type: String,
        required: false
    },
    estado: {
        type: String,
        enum: ['Activo', 'Inactivo', 'Licencia'],
        default: 'Activo'
    }
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;

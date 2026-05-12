import Employee from '../models/employee.model.js';
import mongoose from 'mongoose';

export const getAllEmployees = async (req, res) => {
    console.log('Obtiene todos los empleados');
    try {
        const employees = await Employee.find({}, { __v: 0 });
        if (employees.length === 0) {
            return res.status(404).json({ message: 'No se encontraron empleados' });
        }
        res.status(200).json({ employees });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los empleados', error });
    }
};

export const getEmployeeById = async (req, res) => {
    console.log('EMPLEADO POR ID');
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({
                msg: 'Empleado no encontrado'
            });
        }
        return res.status(200).json({
            employee
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener el empleado'
        });
    }
};

export const postEmployee = async (req, res) => {
    console.log('POST EMPLEADO');
    const body = req.body;
    const employee = new Employee(body);
    try {
        const validationError = employee.validateSync();
        if (validationError) {
            const errorMessages = Object.values(validationError.errors).map(error => error.message);
            return res.status(400).json({
                error: errorMessages
            });
        }
        await employee.save();
        return res.status(201).json({
            msg: 'Empleado guardado correctamente',
            employee
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                msg: 'El email ya está registrado'
            });
        }
        return res.status(500).json({
            msg: 'Error al guardar el empleado',
            error: error.message
        });
    }
};

export const putEmployee = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const employee = await Employee.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (!employee) {
            return res.status(404).json({
                msg: 'Empleado no encontrado'
            });
        }
        return res.status(200).json({
            msg: 'Empleado actualizado correctamente',
            employee
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                msg: 'El email ya está registrado'
            });
        }
        return res.status(500).json({
            msg: 'Error al actualizar el empleado',
            error: error.message
        });
    }
};

export const deleteEmployee = async (req, res) => {
    console.log('DELETE EMPLEADO');
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const employee = await Employee.findByIdAndDelete(id);
        if (!employee) {
            return res.status(404).json({
                msg: 'Empleado no encontrado'
            });
        }
        return res.status(200).json({
            msg: 'Empleado eliminado correctamente',
            employee
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al eliminar el empleado',
            error: error.message
        });
    }
};

export const getEmployeesByDepartment = async (req, res) => {
    console.log('EMPLEADOS POR DEPARTAMENTO');
    const departamento = req.params.departamento;
    try {
        const employees = await Employee.find({ departamento });
        if (employees.length === 0) {
            return res.status(404).json({
                msg: `No se encontraron empleados en el departamento: ${departamento}`
            });
        }
        return res.status(200).json({
            employees
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener empleados por departamento',
            error: error.message
        });
    }
};

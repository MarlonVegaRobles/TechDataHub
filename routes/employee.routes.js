import { Router } from 'express';
import {
    getAllEmployees,
    getEmployeeById,
    postEmployee,
    putEmployee,
    deleteEmployee,
    getEmployeesByDepartment
} from '../controllers/employee.controllers.js';

const employee = Router();

employee.get('/', getAllEmployees);

employee.get('/departamento/:departamento', getEmployeesByDepartment);

employee.get('/:id', getEmployeeById);

employee.post('/', postEmployee);

employee.put('/:id', putEmployee);

employee.delete('/:id', deleteEmployee);

export default employee;

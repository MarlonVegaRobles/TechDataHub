import employee from './employee.routes.js';
import {Router} from 'express';
const indexRoutes = Router();

indexRoutes.use('/employee', employee);

export default indexRoutes;
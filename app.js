import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import indexRoutes from './routes/index.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', indexRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

export default app;

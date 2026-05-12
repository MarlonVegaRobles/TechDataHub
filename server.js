import dotenv from 'dotenv';
import app from './app.js';
import { conectarMongoDB } from './config/database.js';
import chalk from 'chalk';

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await conectarMongoDB();

  app.listen(PORT, () => {
    console.log(chalk.yellow(`Servidor iniciado en http://localhost:${PORT}`));
  });
};

startServer();

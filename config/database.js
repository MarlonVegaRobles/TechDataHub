import mongoose from 'mongoose';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/TechDataHub';

const conectarMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(chalk.green('Conexión a MongoDB exitosa'));
  } catch (error) {
    console.error(chalk.red('Error al conectar a MongoDB:', error));
    process.exit(1);
  }
};

export { conectarMongoDB };

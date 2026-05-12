# TechDataHub

TechDataHub es un sistema de almacenamiento empresarial diseñado para gestionar empleados de una empresa tecnológica. Esta API REST permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los empleados, así como filtrar por departamento.

## Características

- Gestión completa de empleados: agregar, consultar, actualizar y eliminar.
- Filtrado de empleados por departamento.
- Validación de datos con Mongoose.
- Conexión a base de datos MongoDB.
- Servidor Express con CORS habilitado.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución.
- **Express.js**: Framework para el servidor web.
- **Mongoose**: ODM para MongoDB.
- **MongoDB**: Base de datos NoSQL.
- **CORS**: Para permitir solicitudes desde diferentes orígenes.
- **Dotenv**: Para variables de entorno.

## Instalación

1. Clona el repositorio:
   ```
   git clone <url-del-repositorio>
   cd TechDataHub
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Configura las variables de entorno. Crea un archivo `.env` en la raíz del proyecto con:
   ```
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/TechDataHub
   ```

4. Asegúrate de tener MongoDB corriendo en tu máquina local o configura la URI para una base de datos remota.

## Uso

### Iniciar el servidor

Para desarrollo:
```
npm run dev
```

Para producción:
```
npm start
```

El servidor se iniciará en `http://localhost:3000` (o el puerto configurado).

### Endpoints de la API

Todos los endpoints están bajo el prefijo `/api/employee`.

#### Obtener todos los empleados
- **GET** `/api/employee`
- Respuesta: Lista de todos los empleados.

#### Obtener empleados por departamento
- **GET** `/api/employee/departamento/:departamento`
- Parámetros: `departamento` (string)
- Respuesta: Lista de empleados en el departamento especificado.

#### Obtener empleado por ID
- **GET** `/api/employee/:id`
- Parámetros: `id` (ObjectId de MongoDB)
- Respuesta: Detalles del empleado.

#### Crear un nuevo empleado
- **POST** `/api/employee`
- Cuerpo (JSON):
  ```json
  {
    "nombre": "Juan",
    "apellido": "Pérez",
    "email": "juan.perez@empresa.com",
    "puesto": "Desarrollador",
    "departamento": "Tecnología",
    "salario": 50000,
    "telefono": "123456789"
  }
  ```
- Respuesta: Empleado creado.

#### Actualizar un empleado
- **PUT** `/api/employee/:id`
- Parámetros: `id` (ObjectId)
- Cuerpo: Campos a actualizar (igual que POST).
- Respuesta: Empleado actualizado.

#### Eliminar un empleado
- **DELETE** `/api/employee/:id`
- Parámetros: `id` (ObjectId)
- Respuesta: Confirmación de eliminación.

### Modelo de Empleado

```javascript
{
  nombre: String (requerido),
  apellido: String (requerido),
  email: String (requerido, único),
  puesto: String (requerido, enum: ['Desarrollador', 'Diseñador', 'Gerente', 'DevOps', 'QA', 'Administrador']),
  departamento: String (requerido),
  salario: Number (requerido),
  fechaIngreso: Date (por defecto: ahora),
  telefono: String (opcional),
  estado: String (enum: ['Activo', 'Inactivo', 'Licencia'], por defecto: 'Activo')
}
```

## Contribución

1. Haz un fork del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
4. Push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia ISC.
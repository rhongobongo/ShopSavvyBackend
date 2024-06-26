import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import { userRoutes } from './routes/UserRoutes.js';
import { authRoutes } from './routes/AuthRoutes.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './swaggerConfig.js';

const app = express();
const port = 3001;

// Middleware
app.use(json());

// Routes
app.use('/api/users', userRoutes); // Changed to `/api/users` for clarity
app.use('/api/auth', authRoutes);  // Changed to `/api/auth` for clarity

// Swagger setup
const swaggerDocs = swaggerJSDoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});

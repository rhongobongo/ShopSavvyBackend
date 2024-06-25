import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import { userRoutes } from './routes/UserRoutes.js'; // Ensure the correct extension
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './swaggerConfig.js'; // Ensure the correct extension

const app = express();
const port = 3001;

// Middleware
app.use(json());
app.use('/api', userRoutes);

// Swagger setup
const swaggerDocs = swaggerJSDoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});

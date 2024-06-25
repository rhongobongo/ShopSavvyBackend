import { SwaggerOptions } from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'ShopSavvy API',
    version: '1.0.0',
    description: 'API documentation for ShopSavvy',
  },
  servers: [
    {
      url: 'http://localhost:3001/api',
      description: 'Local server',
    },
  ],
};

const options: SwaggerOptions = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Paths to files with documentation
};

export default options;

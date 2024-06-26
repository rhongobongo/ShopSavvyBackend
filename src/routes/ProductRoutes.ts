// src/routes/ProductRoutes.ts
import { Router } from 'express';
import { productController } from '../controllers/ProductController.js';

const router = Router();

router.get('/getAllProducts', productController.getAllProducts); // Adjusted the route to be more specific to '/api/products'

export const productRoutes = router;

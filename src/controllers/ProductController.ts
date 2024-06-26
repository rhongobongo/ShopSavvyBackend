// src/controllers/ProductController.ts
import { Request, Response } from "express";
import { products } from "../models/Product.js";

class ProductController {
    public getAllProducts = (req: Request, res: Response): void => {
        res.json(products);
    }
}

export const productController = new ProductController();

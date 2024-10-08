import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();
router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getCategoryById);

export const CategoryRoutes = router;

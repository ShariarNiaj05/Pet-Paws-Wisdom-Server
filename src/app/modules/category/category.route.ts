import express from 'express';
import { CategoryController } from './category.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.utils';

const router = express.Router();
router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getCategoryById);
router.post('/', auth(USER_ROLE.admin), CategoryController.createCategory);

export const CategoryRoutes = router;

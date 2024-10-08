import express from 'express';
import { CategoryController } from './category.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.utils';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryValidations } from './category.validation';

const router = express.Router();
router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getCategoryById);
router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(CategoryValidations.createCategoryValidationSchema),
  CategoryController.createCategory,
);

router.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(CategoryValidations.updateCategoryValidationSchema),
  CategoryController.updateCategory,
);

router.delete('/:id', auth(USER_ROLE.admin), CategoryController.deleteCategory);

export const CategoryRoutes = router;

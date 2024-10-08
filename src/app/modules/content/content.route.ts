import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ContentValidations } from './content.validation';
import { ContentController } from './content.controller';
import { USER_ROLE } from '../User/user.utils';

const router = express.Router();
router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(ContentValidations.createContentValidationSchema),
  ContentController.createContent,
);

router.get('/', ContentController.getAllContents);

router.get('/:id', ContentController.getContentById);

router.put(
  '/:id',
  auth(USER_ROLE.user),
  validateRequest(ContentValidations.updateContentValidationSchema),
  ContentController.updateContent,
);

export const ContentRoutes = router;

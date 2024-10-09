import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { NotificationValidations } from './notification.validation';
import { NotificationController } from './notification.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.utils';

const router = express.Router();

router.post(
  '/',
  validateRequest(NotificationValidations.createNotificationValidationSchema),
  NotificationController.createNotification,
);
export const NotificationRoutes = router;

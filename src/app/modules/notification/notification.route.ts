import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { NotificationValidations } from './notification.validation';

const router = express.Router();

router.post(
  '/',
  auth(),
  validateRequest(NotificationValidations.createNotificationValidationSchema),
  NotificationController.createNotification,
);
export const NotificationRoutes = router;

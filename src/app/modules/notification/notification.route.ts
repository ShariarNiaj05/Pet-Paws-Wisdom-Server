import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { NotificationValidations } from './notification.validation';
import { NotificationController } from './notification.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(NotificationValidations.createNotificationValidationSchema),
  NotificationController.createNotification,
);

router.get('/:userId', NotificationController.getNotificationsByUserId);

router.put('/:id/read', NotificationController.markNotificationAsRead);

router.delete('/:id', NotificationController.deleteNotification);

export const NotificationRoutes = router;

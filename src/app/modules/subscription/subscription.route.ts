import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.utils';
import validateRequest from '../../middlewares/validateRequest';
import { SubscriptionValidations } from './subscription.validation';
import { SubscriptionController } from './subscription.controller';

const router = express.Router();
router.post(
  '/create',
  auth(USER_ROLE.user),
  validateRequest(SubscriptionValidations.createSubscriptionValidationSchema),
  SubscriptionController.createSubscription,
);

router.post(
  '/cancel',
  auth(USER_ROLE.user),
  SubscriptionController.cancelSubscription,
);

router.get(
  '/active',
  auth(USER_ROLE.admin),
  SubscriptionController.getActiveSubscription,
);

router.post(
  '/renew',
  auth(USER_ROLE.user),
  validateRequest(SubscriptionValidations.updateSubscriptionValidationSchema),
  SubscriptionController.renewSubscription,
);
export const SubscriptionRoutes = router;

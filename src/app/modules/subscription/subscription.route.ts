import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.utils';

const router = express.Router();
router.post(
  '/create',
  auth(USER_ROLE.user),
  validateRequest(SubscriptionValidations.createSubscriptionSchema),
  SubscriptionController.createSubscription,
);
export const SubscriptionRoutes = router;

import express from 'express';
import { USER_ROLE } from '../User/user.utils';
import { PaymentController } from './payment.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get(
  '/:userId',
  auth(USER_ROLE.user),
  PaymentController.getPaymentsByUser,
);

/* router.post('/', auth(USER_ROLE.user), PaymentController.createPaymentIntent);
 */
export const PaymentRoutes = router;

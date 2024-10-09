import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.utils';
import { FollowingServiceController } from './following.controller';

const router = express.Router();
router.post(
  '/unfollow/:userId',
  auth(USER_ROLE.user),
  FollowingServiceController.unFollowUser,
);

export const FollowingServiceRoutes = router;

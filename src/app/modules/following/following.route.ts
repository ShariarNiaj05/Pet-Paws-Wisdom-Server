import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.utils';
import { FollowingController } from './following.controller';

const router = express.Router();

router.post(
  '/follow/:userId',
  auth(USER_ROLE.user),
  FollowingController.followUser,
);

router.post(
  '/unfollow/:userId',
  auth(USER_ROLE.user),
  FollowingController.unFollowUser,
);

router.get(
  '/followers/:userId',
  auth(USER_ROLE.user),
  FollowingController.getFollowers,
);

export const FollowingServiceRoutes = router;

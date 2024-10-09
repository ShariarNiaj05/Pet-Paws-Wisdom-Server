import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { ContentRoutes } from '../modules/content/content.route';
import { CommentRoutes } from '../modules/comment/comment.route';
import {
  FollowingRoutes,
  FollowingServiceRoutes,
} from '../modules/following/following.route';

type TModuleRoutes = {
  path: string;
  route: Router;
};

const router = Router();

const moduleRoutes: TModuleRoutes[] = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
  {
    path: '/comment',
    route: CommentRoutes,
  },
  {
    path: '/content',
    route: ContentRoutes,
  },
  {
    path: '/following',
    route: FollowingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

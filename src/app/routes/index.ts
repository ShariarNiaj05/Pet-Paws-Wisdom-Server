import { PaymentRoutes } from './../modules/payment/payment.route';
import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/User/user.route';
import { CategoryRoutes } from '../modules/category/category.route';
import { ContentRoutes } from '../modules/content/content.route';
import { CommentRoutes } from '../modules/comment/comment.route';
import { FollowingRoutes } from '../modules/following/following.route';
import { NotificationRoutes } from '../modules/notification/notification.route';
import { SubscriptionRoutes } from '../modules/subscription/subscription.route';

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
  {
    path: '/notification',
    route: NotificationRoutes,
  },
  {
    path: '/payment',
    route: PaymentRoutes,
  },
  {
    path: '/subscription',
    route: SubscriptionRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

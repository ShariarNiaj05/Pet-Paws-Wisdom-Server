import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { BidRoutes } from '../modules/Bid/bid.route';
import { CarRoutes } from '../modules/Car/car.route';
import { RentRoutes } from '../modules/Rent/rent.route';
import { UserRoutes } from '../modules/User/user.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

import express, { Request, Response } from 'express';
import { NotificationService } from './notification.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const router = express.Router();

const createNotification = catchAsync(async (req: Request, res: Response) => {
  const notification = await NotificationService.createNotificationIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Notification created successfully',
    data: notification,
  });
});
export const NotificationRoutes = router;

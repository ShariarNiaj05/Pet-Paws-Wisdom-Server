import { Request, Response } from 'express';
import { NotificationService } from './notification.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

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

const getNotificationsByUserId = catchAsync(
  async (req: Request, res: Response) => {
    const notifications =
      await NotificationService.getNotificationsByUserIdFromDB(
        req.params.userId,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Notifications fetched successfully',
      data: notifications,
    });
  },
);
export const NotificationController = {
  createNotification,
  getNotificationsByUserId,
};

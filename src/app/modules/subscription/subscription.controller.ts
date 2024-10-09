import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { SubscriptionService } from './subscription.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createSubscription = catchAsync(async (req: Request, res: Response) => {
  const { plan, paymentId, endDate } = req.body;
  const result = await SubscriptionService.createSubscriptionIntoDB(
    req.user._id,
    plan,
    paymentId,
    endDate,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Subscription created successfully',
    data: result,
  });
});

const cancelSubscription = catchAsync(async (req: Request, res: Response) => {
  const result = await SubscriptionService.cancelSubscriptionFrmDB(
    req.user._id,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Subscription canceled successfully',
    data: result,
  });
});

const getActiveSubscription = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SubscriptionService.getActiveSubscriptionFromDB(
      req.user._id,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Active subscription retrieved successfully',
      data: result,
    });
  },
);

const renewSubscription = catchAsync(async (req: Request, res: Response) => {
  const { paymentId, endDate } = req.body;
  const result = await SubscriptionService.renewSubscriptionIntoDB(
    req.user._id,
    paymentId,
    endDate,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Subscription renewed successfully',
    data: result,
  });
});
export const SubscriptionController = {
  createSubscription,
  cancelSubscription,
  getActiveSubscription,
  renewSubscription,
};

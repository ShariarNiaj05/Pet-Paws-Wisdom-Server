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

export const SubscriptionController = { createSubscription };

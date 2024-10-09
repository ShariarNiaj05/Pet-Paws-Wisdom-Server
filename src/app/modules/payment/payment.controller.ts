import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { PaymentService } from './payment.service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

const getPaymentsByUser = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;

  const result = await PaymentService.getPaymentsByUser(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Payments retrieved successfully',
    data: result,
  });
});

export const PaymentController = { getPaymentsByUser };

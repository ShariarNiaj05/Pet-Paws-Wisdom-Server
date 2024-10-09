import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';

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

export const PaymentController = {};

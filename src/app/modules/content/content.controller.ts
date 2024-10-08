import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { ContentService } from './content.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createContent = catchAsync(async (req: Request, res: Response) => {
  const result = await ContentService.createContentIntoDB(
    req.body,
    req.user?._id,
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Content created successfully',
    data: result,
  });
});

export const ContentController = { createContent };

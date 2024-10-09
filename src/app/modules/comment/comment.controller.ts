import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CommentService } from './comment.service';
import httpStatus from 'http-status';

const getAllComments = catchAsync(async (req: Request, res: Response) => {
  const { contentId } = req.params;
  const result = await CommentService.getAllCommentsFromDB(contentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comments retrieved successfully',
    data: result,
  });
});

const createComment = catchAsync(async (req: Request, res: Response) => {
  const result = await CommentService.createCommentIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Comment created successfully',
    data: result,
  });
});

const updateComment = catchAsync(async (req: Request, res: Response) => {
  const result = await CommentService.updateCommentIntoDB(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment updated successfully',
    data: result,
  });
});

const deleteComment = catchAsync(async (req: Request, res: Response) => {
  await CommentService.deleteCommentFrmDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comment deleted successfully',
  });
});
export const CommentController = {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
};

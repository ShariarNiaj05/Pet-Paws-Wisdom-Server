import catchAsync from '../../utils/catchAsync';
import { CommentModel } from './comment.model';

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

export const CommentController = { getAllCommentsFromDB };

import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { ContentService } from './content.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createContent = catchAsync(async (req: Request, res: Response) => {
  try {
    const userId = req.user?._id;

    if (!userId) {
      throw new Error('User not authenticated');
    }

    console.log('Request Headers:', req.headers);
    console.log('Request Body:', req.body);

    // Validate required fields
    const { title, body, category } = req.body;
    if (!title || !body || !category) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: 'Missing required fields',
        errorSources: [
          !title && { path: 'title', message: 'Title is required' },
          !body && { path: 'body', message: 'Body is required' },
          !category && { path: 'category', message: 'Category is required' },
        ].filter(Boolean),
      });
    }

    const result = await ContentService.createContentIntoDB(req.body, userId);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Content created successfully',
      data: result,
    });
  } catch (error) {
    console.error('Error in createContent:', error);
  }
});

const getAllContents = catchAsync(async (req: Request, res: Response) => {
  const result = await ContentService.getAllContentsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Contents retrieved successfully',
    data: result.result,
    meta: result.metaData,
  });
});

const getContentById = catchAsync(async (req: Request, res: Response) => {
  const result = await ContentService.getContentByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content retrieved successfully',
    data: result,
  });
});

const updateContent = catchAsync(async (req: Request, res: Response) => {
  const result = await ContentService.updateContentIntoDB(
    req.params.id,
    req.body,
    req.user?._id,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content updated successfully',
    data: result,
  });
});

const deleteContent = catchAsync(async (req: Request, res: Response) => {
  const result = await ContentService.deleteContentFrmDB(
    req.params.id,
    req.user?._id,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content deleted successfully',
    data: result,
  });
});

const upvoteContent = catchAsync(async (req, res) => {
  const result = await ContentService.upvoteContentIntoDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content upvoted successfully',
    data: result,
  });
});

const downvoteContent = catchAsync(async (req, res) => {
  const result = await ContentService.downvoteContentIntoDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Content downvoted successfully',
    data: result,
  });
});
export const ContentController = {
  createContent,
  getAllContents,
  getContentById,
  updateContent,
  deleteContent,
  upvoteContent,
  downvoteContent,
};

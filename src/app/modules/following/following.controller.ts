import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { FollowingService } from './following.service';
import catchAsync from '../../utils/catchAsync';
import { Request, Response } from 'express';

const followUser = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user._id;
  const targetUserId = req.params.userId;

  const result = await FollowingService.followUserIntoDB(userId, targetUserId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Followed user successfully',
    data: result,
  });
});

const unFollowUser = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user._id;
  const targetUserId = req.params.userId;

  const result = await FollowingService.unFollowUserIntoDB(
    userId,
    targetUserId,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Un-followed user successfully',
    data: result,
  });
});

const getFollowers = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.userId;

  const result = await FollowingService.getFollowersFromDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Followers retrieved successfully',
    data: result,
  });
});

const getFollowing = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.userId;

  const result = await FollowingService.getFollowingFromDB(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Following list retrieved successfully',
    data: result,
  });
});
export const FollowingController = {
  followUser,
  unFollowUser,
  getFollowers,
  getFollowing,
};

import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../User/user.model';

const followUserIntoDB = async (userId: string, targetUserId: string) => {
  if (!targetUserId) {
    throw new AppError(httpStatus.NOT_FOUND, 'Invalid user ID');
  }

  const targetUser = await User.findById(targetUserId);
  if (!targetUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (user.following!.includes(targetUserId)) {
    throw new Error('Already following this user');
  }

  user.following!.push(targetUserId);
  targetUser.followers!.push(userId);

  await user.save();
  await targetUser.save();

  return { following: user.following, followers: targetUser.followers };
};

const unFollowUserIntoDB = async (userId: string, targetUserId: string) => {
  if (!targetUserId) {
    throw new AppError(httpStatus.NOT_FOUND, 'Invalid user ID');
  }

  const targetUser = await User.findById(targetUserId);
  if (!targetUser) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  if (!user.following!.includes(targetUserId)) {
    throw new AppError(httpStatus.NOT_FOUND, 'Not following this user');
  }

  user.following = user.following!.filter(
    (id) => id.toString() !== targetUserId,
  );
  targetUser.followers = targetUser.followers!.filter(
    (id) => id.toString() !== userId,
  );

  await user.save();
  await targetUser.save();

  return { following: user.following, followers: targetUser.followers };
};

const getFollowers = async (userId: string) => {
  const user = await User.findById(userId).populate(
    'followers',
    'name profilePicture',
  );
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  return user.followers;
};
export const FollowingService = { followUserIntoDB, unFollowUserIntoDB };

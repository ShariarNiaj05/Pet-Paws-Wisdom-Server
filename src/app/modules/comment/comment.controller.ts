import { CommentModel } from './comment.model';

const getAllCommentsFromDB = async (contentId: string) => {
  const comments = await CommentModel.find({ content: contentId })
    .populate('user', 'name') // Populate user info, like name
    .exec();
  return comments;
};

export const CommentController = {};

import { IComment } from './comment.interface';
import { CommentModel } from './comment.model';

const getAllCommentsFromDB = async (contentId: string) => {
  const comments = await CommentModel.find({ content: contentId })
    .populate('user', 'name') // Populate user info, like name
    .exec();
  return comments;
};

const createCommentIntoDB = async (data: IComment) => {
  const comment = new CommentModel(data);
  await comment.save();
  return comment;
};

export const CommentService = { getAllCommentsFromDB, createCommentIntoDB };

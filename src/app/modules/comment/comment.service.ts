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

const updateCommentIntoDB = async (id: string, data: Partial<IComment>) => {
  const updatedComment = await CommentModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedComment;
};

const deleteCommentFrmDB = async (id: string) => {
  await CommentModel.findByIdAndDelete(id);
};
export const CommentService = {
  getAllCommentsFromDB,
  createCommentIntoDB,
  updateCommentIntoDB,
  deleteCommentFrmDB,
};

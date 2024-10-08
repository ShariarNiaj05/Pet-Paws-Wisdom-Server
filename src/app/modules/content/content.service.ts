import QueryBuilder from '../../builder/QueryBuilder';
import { IContent } from './content.interface';
import { ContentModel } from './content.model';

const createContentIntoDB = async (data: IContent, userId: string) => {
  const newContent = await ContentModel.create({ ...data, author: userId });
  return newContent;
};

const getAllContentsFromDB = async (query: Record<string, unknown>) => {
  const contentQuery = new QueryBuilder(ContentModel.find(), query)
    .search(['title', 'category', 'tags'])
    .filter()
    .sort()
    .paginate();

  const result = await contentQuery.modelQuery;
  const metaData = await contentQuery.countTotal();
  return { result, metaData };
};

const getContentByIdFromDB = async (id: string) => {
  const content = await ContentModel.findById(id);
  return content;
};

const updateContentIntoDB = async (
  id: string,
  data: Partial<IContent>,
  userId: string,
) => {
  const updatedContent = await ContentModel.findOneAndUpdate(
    { _id: id, author: userId }, // Ensure only the author can update
    data,
    { new: true },
  );
  return updatedContent;
};

const deleteContentFrmDB = async (id: string, userId: string) => {
  const deletedContent = await ContentModel.findOneAndDelete({
    _id: id,
    author: userId,
  });
  return deletedContent;
};

const upvoteContentIntoDB = async (id: string, userId: string) => {
  const content = await ContentModel.findById(id);
  if (content) {
    content.upvotes.push(userId);
    content.downvotes = content.downvotes.filter((vote) => vote !== userId);
    await content.save();
  }
  return content;
};
export const ContentService = {
  createContentIntoDB,
  getAllContentsFromDB,
  getContentByIdFromDB,
  updateContentIntoDB,
  deleteContentFrmDB,
  upvoteContentIntoDB,
};

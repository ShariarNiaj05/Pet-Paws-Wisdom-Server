import QueryBuilder from '../../builder/QueryBuilder';
import { IContent } from './content.interface';
import { ContentModel } from './content.model';

const createContentIntoDB = async (data: IContent, userId: string) => {
  try {
    console.log('Creating content with data:', data);
    console.log('User ID:', userId);

    const contentData = {
      ...data,
      author: userId,
      upvotes: 0,
      downvotes: 0,
    };

    console.log('Final content data:', contentData);

    const newContent = await ContentModel.create(contentData);
    console.log('Created content:', newContent);

    return newContent;
  } catch (error) {
    console.error('Error in createContentIntoDB:', error);
    throw error;
  }
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

const upvoteContentIntoDB = async (id: string) => {
  const updatedContent = await ContentModel.findByIdAndUpdate(
    id,
    { $inc: { upvotes: 1 } },
    { new: true },
  );
  return updatedContent;
};

const downvoteContentIntoDB = async (id: string) => {
  const updatedContent = await ContentModel.findByIdAndUpdate(
    id,
    { $inc: { downvotes: 1 } },
    { new: true },
  );
  return updatedContent;
};
export const ContentService = {
  createContentIntoDB,
  getAllContentsFromDB,
  getContentByIdFromDB,
  updateContentIntoDB,
  deleteContentFrmDB,
  upvoteContentIntoDB,
  downvoteContentIntoDB,
};

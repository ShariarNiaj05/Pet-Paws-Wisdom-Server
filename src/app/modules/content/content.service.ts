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

export const ContentService = { createContentIntoDB };

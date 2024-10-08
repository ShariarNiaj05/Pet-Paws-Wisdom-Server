import { IContent } from './content.interface';
import { ContentModel } from './content.model';

const createContentIntoDB = async (data: IContent, userId: string) => {
  const newContent = await ContentModel.create({ ...data, author: userId });
  return newContent;
};

export const ContentService = { createContentIntoDB };

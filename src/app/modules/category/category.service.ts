import QueryBuilder from '../../builder/QueryBuilder';
import { CategoryModel } from './category.model';

const getAllCategoriesFromDB = async (query: Record<string, unknown>) => {
  const categoryQuery = new QueryBuilder(CategoryModel.find(), query)
    .search(['name'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await categoryQuery.modelQuery;
  const metaData = await categoryQuery.countTotal();
  return {
    meta: metaData,
    data: result,
  };
};

export const CategoryService = { getAllCategoriesFromDB };

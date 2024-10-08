import QueryBuilder from '../../builder/QueryBuilder';
import { ICategory } from './category.interface';
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

const getCategoryByIdFromDB = async (id: string) => {
  const category = await CategoryModel.findById(id);
  return category;
};

const createCategoryIntoDB = async (data: ICategory) => {
  const category = await CategoryModel.create(data);
  return category;
};

const updateCategoryIntoDB = async (id: string, data: Partial<ICategory>) => {
  const updatedCategory = await CategoryModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return updatedCategory;
};

export const CategoryService = {
  getAllCategoriesFromDB,
  getCategoryByIdFromDB,
  createCategoryIntoDB,
  updateCategoryIntoDB,
};

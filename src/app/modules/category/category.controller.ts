import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CategoryService } from './category.service';

const getAllCategories = catchAsync(async (req, res) => {
  const result = await CategoryService.getAllCategoriesFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getCategoryById = catchAsync(async (req, res) => {
  const result = await CategoryService.getCategoryByIdFromDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category retrieved successfully',
    data: result,
  });
});

const createCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.createCategoryIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});

const updateCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.updateCategoryIntoDB(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category updated successfully',
    data: result,
  });
});

const deleteCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.deleteCategoryFrmDB(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category deleted successfully',
    data: result,
  });
});

export const CategoryController = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};

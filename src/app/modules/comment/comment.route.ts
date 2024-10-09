import express from 'express';
import { CommentController } from './comment.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.utils';

const router = express.Router();

router.get('/:contentId', CommentController.getAllComments);

router.post('/', auth(USER_ROLE.user), CommentController.createComment);

export const CommentRoutes = router;

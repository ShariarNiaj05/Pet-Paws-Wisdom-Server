import express from 'express';
import { CommentController } from './comment.controller';

const router = express.Router();

router.get('/:contentId', CommentController.getAllComments);

export const CommentRoutes = router;

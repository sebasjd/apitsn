import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { getNews, addNew, deleteNew } from '../controllers/news.controller.js';

const router = Router();

router.get('/news', getNews);

router.post('/news/add', addNew);

router.delete('/news/delet', authRequired, deleteNew);

export default router;
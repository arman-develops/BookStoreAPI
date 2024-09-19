import express from 'express';

import {createAuthor, readAuthorDetails, updateAuthorDetails, deleteAuthor} from '../controller/authorController.js';

const router = express.Router();

router.post('/create', createAuthor);
router.get('/details', readAuthorDetails);
router.patch('/update', updateAuthorDetails);
router.delete('/delete', deleteAuthor);

export default router;
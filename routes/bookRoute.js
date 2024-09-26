import express from 'express'

import { createBook, readAllBooks, updateBookDetails, deleteBook } from '../controller/bookController.js';
const router = express.Router();


router.post("/create", createBook) //TODO: createBook controller here
router.get("/details", readAllBooks);
router.patch("/update", updateBookDetails);
router.delete("/delete", deleteBook);

export default router;

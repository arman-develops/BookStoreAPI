import express from 'express'

import { createBook, readBookDetails, readAllBooks, updateBookDetails, deleteBookDetails } from '../controller/bookController.js';
const router = express.Router();


router.post("/create", createBook) //TODO: createBook controller here
router.get("/details", readAllBooks);
router.patch("/update", updateBookDetails);
router.delete("/delete", deleteBookDetails);

export default router;

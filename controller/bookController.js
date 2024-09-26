
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import connectDB from "../db/dbFactory.js";
import bookModel from "../models/bookModel.js";
const now = dayjs();
// const bookController = await connectDB('mongodb', bookModel);
// const bookController = await connectDB('postgres', 'books');
const bookController = await connectDB('mysql', 'authors')

async function createBook(req, res) {
    const {
        authorID, title, description, genre, publishDate=now.format('YYYY-MM-DD')
    } = req.body;
    const book = {
        bookID: uuidv4(),
        title: title,
        authorID, authorID,
        publishDate,
        description,
        genre,

    };

    try {
        const author = await bookController.insert(book);
        res.status(200).json({message: 'Sucessfully saved the document'});
    }catch(err) {
        res.status(500).json({message: `An error occured while saving document. ${err}`})
    }
}

async function readAllBooks(req, res) {

    try {
        const authorDetails = await bookController.read();
        res.status(200).json({message: authorDetails});
    }catch(err) {
        res.status(500).json({message: "An error occured while retrieving your document"});
    }
    
}

async function updateBookDetails(req, res) {
    const {bookID, title, publishDate, description, genre} = req.body;
    try {
        await bookController.update({bookID}, {title, publishDate, description, genre});
        res.status(200).json({message: "Updated author's name"});
    } catch(err) {
        res.status(500).json({message: "An error occured while updating your document"});
    }
}

async function deleteBook(req, res) {
    const {bookID} = req.body;

    try {

        await bookController.delete({bookID});

        res.status(200).json({message: "Successfully deleted an entry"});
    }catch(err) {
        res.status(500).json({message: "Error executing that operation"});
    }
}

export {createBook, readAllBooks, updateBookDetails, deleteBook}
import express from 'express'
import mongoose from "mongoose";
import dayjs from 'dayjs'
import {v4} from 'uuid';

import bookModel from '../models/bookModel.js';

const now = dayjs();

async function createBook(req, res) {
    const {
        authorID, title, description, genre, publishDate=now.format('YYYY-MM-DD')
    } = req.body;
    const book = new bookModel ({
        bookID: v4(),
        title: title,
        authorID, authorID,
        publishDate,
        description,
        genre,

    });

    try {
        await book.save();
        res.status(200).json({message: 'Sucessfully saved the document'})   
    } catch(err) {
        res.status(500).json({message: 'An error occured while saving document'})   
    }
}

async function readAllBooks(req, res) {
    try {
        const bookDetails = await bookModel.find({}).select().exec();
        res.status(200).json({message: bookDetails});
    } catch {
        res.status(500).json({message: 'An error occured while retreiving the document'}) 
    }
}

async function readBookDetails(req, res) {
    const {bookID} = req.body;
    try {
        const bookDetails = await bookModel.find({bookID}).select().exec();
        res.status(200).json({message: bookDetails});
    }catch(err) {
        res.status(500).json({message: 'An error occured while retrieving the document'}) 
    }
}

async function updateBookDetails(req, res) {
    const {bookID, title, publishDate, description, genre} = req.body;
    try {
        await bookModel.findOneAndUpdate({bookID}, {title, publishDate, description, genre});
        res.status(200).json({message: "Updated book details name"});
    } catch(err) {
        res.status(500).json({message: "An error occured while updating your document"});
    }
}

async function deleteBookDetails(req, res) {
    const {bookID} = req.body;
    try {
        await bookModel.deleteOne({bookID});
        res.status(200).json({message: "Successfully deleted an entry"});
    } catch(err) {
        res.status(500).json({message: "Error executing that operation"});
    }
}

export {createBook, readAllBooks, readBookDetails, updateBookDetails, deleteBookDetails}
import mongoose from "mongoose";
import { v4 } from "uuid";

import authorModel from "../models/authorModel.js";

async function createAuthor(req, res) {
    const {name} = req.body;
    const author = new authorModel({
        authorID: v4(),
        authorName: name
    });

    try {
        await author.save();
        res.status(200).json({message: 'Sucessfully saved the document'})   
    } catch(err) {
        res.status(500).json({message: 'An error occured while saving document'})   
    }
}

async function readAuthorDetails(req, res) {
    try {
        const authorDetails = await authorModel.find({}).exec();
        res.status(200).json({message: authorDetails});
    }catch(err) {
        res.status(500).json({message: "An error occured while retrieving your document"});
    }
}

async function updateAuthorDetails(req, res) {
    const {authorName} = req.body;
    try {
        await authorModel.findOneAndUpdate({authorID}, {authorName});
        res.status(200).json({message: "Updated author's name"});
    } catch(err) {
        res.status(500).json({message: "An error occured while retrieving your document"});
    }
}

async function deleteAuthor(req, res) {
    const {authorID} = req.body;
    try {
        await authorModel.deleteOne({authorID});
        res.status(200).json({message: "Successfully deleted an entry"});
    } catch(err) {
        res.status(500).json({message: "Error executing that operation"});
    }
}

export {createAuthor, readAuthorDetails, updateAuthorDetails, deleteAuthor}
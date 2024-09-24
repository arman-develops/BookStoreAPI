
import { v4 as uuidv4 } from "uuid";
import connectDB from "../db/dbFactory.js";
import authorModel from "../models/authorModel.js";
// const authorController = await connectDB('mongodb', authorModel);
const authorController = await connectDB('postgres', 'authors');


async function createAuthor(req, res) {
    const {name} = req.body;
    const authorData = {
        authorID: uuidv4(),
        authorName: name,
    };

    try {
        const author = await authorController.insert(authorData);
        res.status(200).json({message: 'Sucessfully saved the document'});
    }catch(err) {
        res.status(500).json({message: `An error occured while saving document. ${err}`})
    }
}

async function readAuthorDetails(req, res) {

    try {
        const authorDetails = await authorController.read({});
        res.status(200).json({message: authorDetails});
    }catch(err) {
        res.status(500).json({message: "An error occured while retrieving your document"});
    }
    
}

async function updateAuthorDetails(req, res) {
    const {authorID, authorName} = req.body;
    try {
        await authorController.update({authorID}, {authorName});
        res.status(200).json({message: "Updated author's name"});
    } catch(err) {
        res.status(500).json({message: "An error occured while updating your document"});
    }
}

async function deleteAuthor(req, res) {
    const {authorID} = req.body;

    try {

        await authorController.delete({authorID});

        res.status(200).json({message: "Successfully deleted an entry"});
    }catch(err) {
        res.status(500).json({message: "Error executing that operation"});
    }
}

export {createAuthor, readAuthorDetails, updateAuthorDetails, deleteAuthor}
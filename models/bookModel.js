import mongoose from "mongoose";
import {v4} from 'uuid';

const bookSchema = mongoose.Schema({
    bookID: {
        required: true,
        type: String,
        default: v4(),
        unique: true
    },

    authorID: {
        type: String,
        required: true,
        unique: true,
        ref: 'Author'

    },

    title: String,

    publishDate: Date,

    description: String,

    genre: String

});


const bookModel = mongoose.model('Book', bookSchema);

export default bookModel;
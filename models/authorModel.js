import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
    authorID: {
        type: String,
        required: true,
        unique: true
    },

    authorName: String
});

const authorModel = mongoose.model('Author', authorSchema);

export default authorModel;
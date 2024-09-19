import mongoose from "mongoose";

async function connectMongoDB(url) {
    try {
        await mongoose.connect(url);
        console.log("Connected to MongoDB database");
        return mongoose.connection;
    } catch(err) {
        process.exit();           
    }

}

export {connectMongoDB}
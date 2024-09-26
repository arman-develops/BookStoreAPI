import mongoose from "mongoose";
import Db  from "./dbClass.js";
import { config } from 'dotenv';
config();

class MongoDB extends Db {

    constructor(model) {
        super();
        this.model = model;
    }

    static connect() {
        try {
            mongoose.connect(process.env.MONGODB_URL);
            console.log("Connected to MongoDB database");
            return mongoose.connection;
        } catch(err) {
            process.exit();           
        }
    }
    
    async insert(data) {
        const doc = new this.model(data)
        return await doc.save();
    }
       
    async read(query) {
        return await this.model.find({}).exec();
    }
    
    async update(query, data) {
        return await this.model.findOneAndUpdate({query}, {data});
    }
    
    async delete(query) {
        return await this.model.deleteOne({query});    
    }
}



export default MongoDB;
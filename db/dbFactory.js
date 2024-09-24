import MongoDB from "./mongoDB.js";
import { connectGraphQL } from "./graphQL.js"; 
import { connectMySQL } from "./mySQL.js";
import { connectPostgreSQL } from "./postgreSQL.js";

async function connectDB(dbType, collection) {
    switch(dbType) {
        case 'mongodb':
            MongoDB.connect();
            return new MongoDB(collection);
        case 'graphQL':
            return connectGraphQL(url);
        case 'mySQL':
            return connectMySQL(url);
        case 'postgreSQL':
            return connectPostgreSQL(url);
        default:
            console.log("Unsupported database, switch now!!");
            process.exit();
    }
}

export default connectDB;


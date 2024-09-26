import MongoDB from "./mongoDB.js";
import { connectGraphQL } from "./graphQL.js"; 
import Mysql from "./mySQL.js";
import Postgres from "./postgreSQL.js";

async function connectDB(dbType, collection) {
    switch(dbType) {
        case 'mongodb':
            MongoDB.connect();
            return new MongoDB(collection);
        case 'graphQL':
            return connectGraphQL(url);
        case 'mysql':
            return new Mysql(collection);
        case 'postgres':
            // Postgres.connect()
            return new Postgres(collection);
        default:
            console.log("Unsupported database, switch now!!");
            process.exit();
    }
}

export default connectDB;


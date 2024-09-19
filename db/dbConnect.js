import { connectMongoDB } from "./mongoDBConnect.js";
import { connectGraphQL } from "./graphQLConnect.js"; 
import { connectMySQL } from "./mySQLConnect.js";
import { connectPostgreSQL } from "./postgreSQL.js";

async function connect(dbType, url) {
    switch(dbType) {
        case 'mongodb':
            return await connectMongoDB(url);
        case 'graphQL':
            return await connectGraphQL(url);
        case 'mySQL':
            return await connectMySQL(url);
        case 'postgreSQL':
            return await connectPostgreSQL(url);
        default:
            console.log("Unsupported database, switch now!!");
            process.exit();
        
    }
}

export default connect;


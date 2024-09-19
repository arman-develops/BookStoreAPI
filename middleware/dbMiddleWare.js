import connect from "../db/dbConnect.js";

async function DBConnection() {
    try {
        const dbType = process.env.DB_TYPE || 'mongodb';
        const url = process.env.MONGODB_URL;
        await connect(dbType, url);
    } catch(err) {

        res.status(500).json({message: "An error occured"});
        console.log("Connection to database failed");
        process.exit();
    }

}

export default DBConnection;
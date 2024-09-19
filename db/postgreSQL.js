async function connectPostgreSQL(url) {
    try {
        console.log("Connected to postgreSQL database");
    } catch(err) {
        process.exit();           
    }
}

export {connectPostgreSQL}
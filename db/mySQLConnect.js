async function connectMySQL(rl) {
    try {
        console.log("Connected to MySQL database");
    } catch(err) {
        process.exit();           
    }
}

export {connectMySQL}
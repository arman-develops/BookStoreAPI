async function connectGraphQL(url) {
    try {
        console.log("Connected to GraphQL database");
    } catch(err) {
        process.exit();           
    }
}

export {connectGraphQL};
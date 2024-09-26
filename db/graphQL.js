async function connectGraphQL(url) {
    try {
        console.log("Connected to GraphQL database");
    } catch(err) {
        process.exit();           
    }
}

/**
    Author CRUD functions for graphQL
*/

async function createAuthor(req, res) {
    
}

async function readAuthorDetails(req, res) {
    
}

async function updateAuthorDetails(req, res) {

}

async function deleteAuthor(req, res) {
    
}

/** Book CRUD Functions for graphQL **/

async function createBook(req, res) {
   
}

async function readAllBooks(req, res) {
    
}

async function readBookDetails(req, res) {
    
}

async function updateBookDetails(req, res) {
    
}

async function deleteBookDetails(req, res) {
    
}

export {connectGraphQL, createAuthor, readAuthorDetails, updateAuthorDetails, deleteAuthor, createBook, readAllBooks, readBookDetails, updateBookDetails, deleteBookDetails};
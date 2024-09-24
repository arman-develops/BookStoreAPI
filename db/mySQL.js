async function connectMySQL(rl) {
    try {
        console.log("Connected to MySQL database");
    } catch(err) {
        process.exit();           
    }
}

/** Author CRUD functions for mySQL */

async function createAuthor(req, res) {
    
}

async function readAuthorDetails(req, res) {
    
}

async function updateAuthorDetails(req, res) {

}

async function deleteAuthor(req, res) {
    
}

/** Book CRUD Functions for mySQL **/

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


export {connectMySQL, createAuthor, readAuthorDetails, updateAuthorDetails, deleteAuthor, createBook, readAllBooks, readBookDetails, updateBookDetails, deleteBookDetails};


import pg from 'pg';

async function connectPostgreSQL(url) {
    try {
        const pool = new pg.Pool({
            user: 'admin',
            host: url,
            database: 'bookStoreAPI',
            password: '',
            port: ''
        });
        console.log("Connected to postgreSQL database");
        return pool;
    } catch(err) {
        process.exit();           
    }
}

/**
    Author CRUD functions for postgreSQL
*/

async function createAuthor(req, res) {
    
}

async function readAuthorDetails(req, res) {
    
}

async function updateAuthorDetails(req, res) {

}

async function deleteAuthor(req, res) {
    
}

/** Book CRUD Functions for postgreSQL **/

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

export {connectPostgreSQL, createAuthor, readAuthorDetails, updateAuthorDetails, deleteAuthor, createBook, readAllBooks, readBookDetails, updateBookDetails, deleteBookDetails};
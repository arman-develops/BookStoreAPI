# BookStoreAPI

BookStoreAPI is a Node.js backend service that allows users to perform CRUD (Create, Read, Update, Delete) operations on books and authors. The application connects to a MongoDB database and provides a REST API to manage a bookstore's catalog and author details.

## Features
- **Add Books**: Add new books with title, author, genre, and description.
- **List Books**: Fetch a list of all available books in the store.
- **Update Books**: Update information about existing books.
- **Delete Books**: Remove books from the catalog.
- **Add Authors**: Manage authors' information including names and ID associations.
- **Delete Authors**: Remove author information from the database.
- **Database Abstraction Layer**: Developed a single interface for my database controllers but each database implementation is different.
- **MongoDB Integration**: Uses MongoDB Atlas for storing books and authors.
- **PostgreSQL Integration**: Uses PostgreSQL as an optional database

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arman-develops/BookStoreAPINodeJS.git

2. Navigate into the project directory
    ```bash
    cd BookStoreAPINodejs
3. Install dependencies
    ```bash
    npm install

4. Create a **.env** file in the root directory of the project and set the following environment variables
    ```
    SERVER_PORT=3000

    MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/BookStoreAPI?retryWrites=true&w=majority&appName=Cluster0

    DB_TYPE=mongodb

5. start the development server
    ```
    npm run dev

## Usage
Once the server is up, the API is accessible at `http://localhost:3000`
At tool like [Postman](https://www.postman.com/ "Postman") or `curl` comes in handy.

## Techonologies
> 1.**Node.JS**: Javascript runtime for building backend

> 2.**ExpressJS**: web framework for node.js used to create the backend.

> 3.**MongoDB**: NoSQL database used to store data.

>4.**Mongoose**: MongoDB object modelling tool for schema and query management.

>5.**MongoDB Atlas**: Cloud-hosted MongoDB database.

>6.**PostgreSQL Database**: Locally and cloud hosted installations.

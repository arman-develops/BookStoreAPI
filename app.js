//npm imports
import express from 'express';
import {config} from 'dotenv';

//in-app imports
import bookRouter from './routes/bookRoute.js';
import authorRouter from './routes/authorRoute.js';

config();
const app = express();
app.use(express.json());

app.use('/api/v1/book', bookRouter);
app.use('/api/v1/author', authorRouter);


app.listen(process.env.SERVER_PORT, () => {
    console.log("Server started on port 3000");
    
    
});
require('dotenv').config()
const express = require('express');
const app = express()
const connectDb = require('./db/connect')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')


// middlewares 
app.use(express.json());
app.use(notFound)
app.use(errorHandler)



// database connection
const port = process.env.PORT || 3000
const startDb = async () => {
    try {
       await connectDb(process.env.MONGO_URI_LOCAL)
        app.listen(port, console.log('listening on port ' + port))
    } catch (error) {
        console.log(error);
    }
}

startDb()
require('dotenv').config()
require('express-async-error');
const express = require('express');
const app = express()
const path = require('path')
const fileUpload = require('express-fileupload')
// always use v2
const cloudinary = require('cloudinary').v2;
const connectDb = require('./db/connect')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')
const productRoute = require('./routes/productRoute')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// middlewares


app.use(express.static('./public'))
app.use(express.json());
app.use(fileUpload({useTempFiles: true}))



app.get('/', (req, res) => {
    res.send('<h1> store api <a href="/api/v1/products">products</a></h1>')
})

app.use('/api/v1/products', productRoute)

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
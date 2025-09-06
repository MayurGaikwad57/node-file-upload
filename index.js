// const { configDotenv } = require('dotenv');
const express = require('express');
require('dotenv').config({path:'./configuration/.env'});
const fileUpload = require('./configuration/storageConfig');
const router = require('./routes/fileUploadRoute');
const cors = require('cors')
const connectDB = require('./connection')

const app = express();
const PORT = process.env.PORT
const db_url = process.env.DB_URL;
console.log("DB url is",db_url);


//Connection with database
connectDB(db_url).then((res)=>console.log("Db connected")).catch()

// cors configuration
app.use(cors({
    origin : 'http://localhost:4200'
}))

// middle wares to be used 
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Routes routing to the necessary routes
app.use('/api',router)

app.listen(PORT,()=>console.log("Listening on port",PORT))

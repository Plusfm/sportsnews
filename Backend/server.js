const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { mongoUri } = require('./config');
const path = require('path');
const dotenv = require('dotenv')
dotenv.config()

// route import
const contactRouter= require('./Route/contactRoute')
const contentRouter=require('./Route/contentRoute')
const authRoutes=require('./Route/authRoutes')





const server = express();
const port = process.env.PORT || 4000;


const allowedOrigins = [process.env.BASE_URL, 'http://localhost:5173'];

// application middleware
// server.use(express.static(path.resolve(__dirname,'./../projectTime/dist')))
server.use(express.static(path.resolve(__dirname, './../projectTime/dist')));


server.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200,
  })
); 

server.use(express.json());

// Route Mounting
server.use(contactRouter)
server.use(contentRouter)
server.use(authRoutes)

server.get('*',(req,res)=>{
     res.sendFile(path.resolve(__dirname, './../projectTime/dist','index.html'))

})

// Database and Server Connection
mongoose
  .connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express()

mongoose.connect("mongodb+srv://deveshshukla1603:AndroDev2003@cluster0.b2mpqv0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  }).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log("MongoDB = ",err.message,"\nCheck .env file"));
  
const auth = require('./routes/authRoutes');
const blogRoute = require('./routes/blogRoutes')
const verifyToken = require('./middleware/authMiddleware');




app.use('/user',auth);
app.use('/blogs',verifyToken,blogRoute);

app.listen(3000,console.log("App is Running at 3000"));
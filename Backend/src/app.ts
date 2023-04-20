const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();



const cors = require('cors');
const mongoose = require('mongoose');

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch((err: any) => console.log(err));
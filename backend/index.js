const express = require('express');
const mongoose=require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const Product = require('./routes/product.routes');
app.use('/',Product);

// mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/ecom',{useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => console.log("connected to mongoDB ..."))
.catch (err => console.log("could not connected t mongoDB ", err));

app.listen(3000, () => console.log("Waiting for port 3000 ..."));




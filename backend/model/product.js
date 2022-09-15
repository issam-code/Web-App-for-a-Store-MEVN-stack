const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    name : {
        type: String,
        required : true,
    },
    description : {
        type: String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    nb_tot : {
        type : Number
    },
    images : [{type: String}],
    size : [{type : String}],
    min_imgs : [{type : String}],
    patern : [{type : String}]
});
const Product = mongoose.model('products', productSchema);
module.exports = Product;
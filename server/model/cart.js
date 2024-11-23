//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let bookModel = mongoose.Schema({
    Name: String,
    Brand: String,
    ItemType: String,
    Description: String,
    Price: Number,
    Address: String,
},
{
    collection:"Cart"
});
module.exports =mongoose.model('Cart',cartModel);

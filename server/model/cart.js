//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let cartModel = mongoose.Schema({
    Name: String,
    Brand: String,
    ItemType: String,
    Description: String,
    Price: Number,
    Address: String,
},
{
    collection:"cart"
});
module.exports =mongoose.model('cart',cartModel);
/* this creates the needed data types for mongo database, model that I follow when creating routes. */
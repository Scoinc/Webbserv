const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
  });
  
const Product= mongoose.model('Product', productSchema);

exports.createProduct = (name, price) => {
    var product = new Product({
        name: name, 
        price: price
       })

       return product
     }

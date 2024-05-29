const mongoose = require('mongoose');


//  Schema for the deepest level of nesting
const itemSchema3 = new mongoose.Schema({
    name: String,
    path: String,
    styleInfo: {
        type: mongoose.Schema.Types.Mixed,  // Allow any nested object structure
        _id: false // Avoid creating an _id field for the nested object
    },
});

// Schema for the second level of nesting
const itemSchema2 = new mongoose.Schema({
    name: String,
    path: String,
    styleInfo: {
        type: mongoose.Schema.Types.Mixed,
        _id: false
    },
    items: [itemSchema3]
});

// Schema for the first level of nesting
const itemSchema1 = new mongoose.Schema({
    name: String,
    type:String,
    path: String,
  
    styleInfo: {
        type: mongoose.Schema.Types.Mixed,
        _id: false
    },
    items: [itemSchema2], // Array of items using the itemSchema
});

// Define main product Schema 
const productSchema = new mongoose.Schema({
  navigationArr: [itemSchema1], // Array of dropdowns using the dropdownSchema
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  thumbnail: { type: String },
  style: { type: mongoose.Schema.Types.Mixed },
  title: { type: String },
  logo: { type: String },
  islogo:{type:Boolean, default:false},
  views: { type: Number },
  likes: { type: Number },
  status: { type: String },
  category: { type: String },
  isCreatedByTemplate: { type: Boolean },
});


// Create model from navigation schema

const ProductModel = mongoose.model('product', productSchema);
module.exports = ProductModel;

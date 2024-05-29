const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  title: { type: String },
  varient: { type:Number },
  moveable:{type:Boolean,default:false},
  moveabledata:{ type: mongoose.Schema.Types.Mixed },
  data: [{ type: mongoose.Schema.Types.Mixed }],
  style: { type: mongoose.Schema.Types.Mixed },
});

const ProductModel = mongoose.model("section", sectionSchema);
module.exports = ProductModel;
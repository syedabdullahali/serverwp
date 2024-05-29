const mongoose = require("mongoose");

const TemplatePageSchema = new mongoose.Schema({
  title: String,
  path: String,
  navigationId:{type:String},
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  style: { type: mongoose.Schema.Types.Mixed },
  layout:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "layout",
    },
  ],
  sections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "section",
    },
  ],
});

const templatepage = mongoose.model("templatepage", TemplatePageSchema);
module.exports = templatepage;

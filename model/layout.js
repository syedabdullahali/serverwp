const mongoose = require("mongoose");

const GridItemSchema = new mongoose.Schema({
    rowStart: Number,
    colStart: Number,
    rowEnd: Number,
    colEnd: Number,
    component: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
      }] ,
      style: { type: mongoose.Schema.Types.Mixed },
  });

const layoutSchema = new mongoose.Schema({
  type: { type: String },
  data: [GridItemSchema],
  style: { type: mongoose.Schema.Types.Mixed },
});

const LayoutModel = mongoose.model("layout", layoutSchema);
module.exports = LayoutModel;

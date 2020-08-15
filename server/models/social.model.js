const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const socialSchema = new Schema(
  {
    username: { type: String, required: true },
    host: { type: String, required: true },
    handle: { type: String, required: true },
  },
  { timestamps: true }
);

const Social = mongoose.model("Social", socialSchema);

module.exports = Social;

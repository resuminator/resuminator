const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const experienceSchema = new Schema(
  {
    username: { type: String, required: true },
    jobTitle: { type: String, required: true },
    company: { type: String, required: true },
    additionalInfo: { type: String },
    start: { type: String },
    end: { type: String },
    location: { type: String },
    description: { type: [String], required: true },
    tags: { type: [String] },
  },
  { timestamps: true }
);

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;

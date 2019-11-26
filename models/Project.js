const { model, Schema } = require("mongoose");

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["starting",],
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
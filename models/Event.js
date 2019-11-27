const { model, Schema } = require("mongoose");

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true,
    },    
    location: {
      address: String,
      coordinates: [Number]
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model("Event", eventSchema);
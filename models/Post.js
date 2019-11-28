const {
  model,
  Schema
} = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  project_Id: { //   <= revisar
    type: String,
  },
  imgName: String,
  imgPath: {
    type: String,
    default: "https://streetartnyc.org/wp-content/uploads/2016/06/Dasic-Fernandez-and-Rubin415-street-art-Greenpoint-NYC.jpg"
  }
}, {
  timestamps: true,
  versionKey: false
});


module.exports = model("Post", postSchema);
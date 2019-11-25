const { model, Schema } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true,
    },
    photoProfileURL: {
      type: String,
      default:
        "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model("Post", postSchema);
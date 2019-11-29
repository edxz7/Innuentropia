const { model, Schema } = require("mongoose");

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    status_project: {
      type: String,
      enum: ["Starting Adventure","halfway through","Advance stage", "Almost ready"],
    }, 
    req_skills:[String],
    ending_date:Date,
    external_url:String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  }, {
  timestamps: true,
  versionKey: false
});
module.exports = model("Project", projectSchema);
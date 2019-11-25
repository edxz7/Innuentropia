const { model, Schema } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    facebook_id: {
      type: String
    },
    google_id: {
      type: String
    },
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    role: {
      type: String,
      required: true,
      enum: ["Actor", "Painter","Model", "Singer","Musician","Videographer","Digital Artist","Writter","Cinematographer","Designer"],
    },
    photoProfileURL: {
      type: String,
      default:
        "https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
    },
    telephone_number: {
      type: String,
      required: true,
      trim: true
    },
    tag:[String],
    postsId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post"
      }
    ],
    frienshipsReqId:[
      {
        type: Schema.Types.ObjectId,
        ref:"User"
      }
    ],
    friendsId: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    eventsId:[
      {
        type: Schema.Types.ObjectId,
        ref: "Event"        
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("User", userSchema);
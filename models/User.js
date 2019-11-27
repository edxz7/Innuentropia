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
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    role: {
      type: String,
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
    postsId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post"
      }
    ],
    eventsId:[
      {
        type: Schema.Types.ObjectId,
        ref: "Event"        
      }
    ],
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag"
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
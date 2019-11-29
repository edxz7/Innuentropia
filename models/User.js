const {
  model,
  Schema
} = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema({
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
  description: {
    type: String,
    default: "Describe yourself and things you like."
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  role: {
    type: String,
    enum: ["Actor", "Artist", "Hobbyist", "Painter", "Model", "Singer", "Musician", "Videographer", "Digital Artist", "Writter", "Cinematographer", "Designer"],
    default: "Artist"
  },
  photoProfileURL: {
    type: String,
    default: "/images/dali_small.png"
  },
  telephone_number: {
    type: String,
    trim: true
  },
  frienshipsReqId: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  friendsId: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  postsId: [{
    type: Schema.Types.ObjectId,
    ref: "Post"
  }],
  eventsId: [{
    type: Schema.Types.ObjectId,
    ref: "Event"
  }],
  tags: [String]
}, {
  timestamps: true,
  versionKey: false
});

userSchema.plugin(PLM, {
  usernameField: "email"
});

module.exports = model("User", userSchema);
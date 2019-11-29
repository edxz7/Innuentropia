const router = require("express").Router();
const Event = require("../models/Event");
const Post = require("../models/Post");

router.get("/feed", async (req, res, next) => {
  const events = await Event.find().populate("author");
  const posts = await Post.find().populate("author");
  res.render("feedPage", { events, posts });
});

module.exports = router;
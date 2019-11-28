const router = require("express").Router();
const Event = require("../models/Event");

router.get("/feed", async (req, res, next) => {
  const events = await Event.find().populate("author");
  res.render("feedPage", { events });
});

module.exports = router;
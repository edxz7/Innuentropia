const router = require("express").Router();

const {
  // createEventGet,
  eventGet,
  createEventPost,
  deleteEvent,
  editEventGet,
  editEventPost
} = require('../controllers/events.controllers');

// router.get("/event/create", createEventGet)
router.post("/event/create", createEventPost);
router.post("/feed#/event/:id",    eventGet)
router.post("/event/:id/delete", deleteEvent)
router.get('/event/:id/edit', editEventGet);
router.post('/event/:id/edit', editEventPost);
  
module.exports = router

const router = require("express").Router();

const {
  // createEventGet,
  eventGet,
  createEventPost,
  deleteEvent,
  editEventGet,
  editEventPost,
  eventDetailsGet
} = require('../controllers/events.controllers');

// router.get("/event/create", createEventGet)
router.post("/event/create", createEventPost);
router.post("/event/:id",    eventGet);
router.get("/event/:id/delete", deleteEvent);
router.get('/event/:id/edit', editEventGet);
router.post('/event/:id/edit', editEventPost);
router.get('/event/:id',eventDetailsGet);
  
module.exports = router

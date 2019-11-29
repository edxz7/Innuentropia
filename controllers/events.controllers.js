const Event = require("../models/Event")

exports.createEventPost = async (req, res) => {
    const { _id } = req.user;
    console.log(req.body)
    await Event.create({ ...req.body, author: _id });
    res.redirect(`/profile/${req.user._id}`);
};

exports.eventGet = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id).populate("author");
  res.render("eventPages/eventDetailsPage", {
    event,
    coordinates: event.location.coordinates
  });
}

exports.deleteEvent = (req, res) => {
  const {id} = req.params
  Event.findByIdAndDelete(id)
      .then(() =>{ 
        res.redirect(`/profile/${req.user._id}`)
      })
      .catch(err => console.log(err))
};

exports.editEventGet = (req, res) => {
  const { id } = req.params;
  Event.findById(id)
    .then((event) => {
      console.log(event)
      res.render('eventPages/editEvent', { event });
    })
    .catch((err) => console.log(err));
};

exports.editEventPost =  (req, res) => {
  const { id } = req.params;
  console.log({...req.body})
  Event.findByIdAndUpdate(id, {	$set: {...req.body}}, { new: true })
    .then((event) => res.redirect(`/event/${event._id}/edit`))
    .catch((err) => console.log(err));
};
  
exports.eventDetailsGet =  async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id).populate("author");
  res.render("eventPages/eventDetailsPage", {
    event,
    coordinates: event.location.coordinates
  });
}


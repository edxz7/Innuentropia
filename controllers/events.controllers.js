const Event = require("../models/Event")

// exports.createEventGet = (_, res) => {
//     res.render("createEvent")
// };

exports.createEventPost = async (req, res) => {
    const { _id } = req.user;
    await Event.create({ ...req.body, author: _id });
    res.redirect("/profile");
};

exports.eventGet = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id).populate("author");
  res.render("feedPage", {
    event,
    coordinates: event.location.coordinates
  });
}

exports.deleteEvent = (req, res) => {
  const {id} = req.params
  Event.findByIdAndDelete(id)
      .then(() => res.redirect("/"))
      .catch(err => console.log(err))
};

exports.editEventGet = (req, res) => {
  const { id } = req.params;
  Event.findById(id)
    .then((event) => {
      res.render('feedPage', { event });
    })
    .catch((err) => console.log(err));
};

exports.editEventPost = (req, res) => {
  const { id } = req.params;
  console.log({...req.body})
  Place.findByIdAndUpdate(id, {	$set: {...req.body}}, { new: true })
    .then((event) => res.redirect(`/event/${event._id}/edit`))
    .catch((err) => console.log(err));
};
  


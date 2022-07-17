const Event = require("../model/Event");

const getAllEvents = async (req, res, next) => {
  let events;
  try {
    events = await Event.find();
  } catch (err) {
    console.log(err);
  }

  if (!events) {
    return res.status(404).json({ message: "No EVENTS found" });
  }
  return res.status(200).json({ events });
};



const getById = async (req, res, next) => {
  const id = req.params.id;
  let event;
  try {
    event = await Event.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!event) {
    return res.status(404).json({ message: "No Event found" });
  }
  return res.status(200).json({ event });
};

const AddEvent = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let event;
  try {
    event = new Event({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await event.save();
  } catch (err) {
    console.log(err);
  }

  if (!event) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ event });
};

const updateEvent = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let event;
  try {
    event = await Event.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    event = await event.save();
  } catch (err) {
    console.log(err);
  }
  if (!event) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ event });
};

const deleteEvent = async (req, res, next) => {
  const id = req.params.id;
  let event;
  try {
    event = await Event.findByIdAndRemove(id);
  } catch (err) {
    console.log(err); 
  }
  if (!event) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllEvents = getAllEvents;
exports.AddEvent = AddEvent;
exports.getById = getById;
exports.updateEvent = updateEvent;
exports.deleteEvent = deleteEvent;

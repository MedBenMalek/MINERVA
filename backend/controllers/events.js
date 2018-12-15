const Event = require("../Models/Event");

exports.createEvent = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const event = new Event({
    name: req.body.name,
    category: req.body.category,
    dateDebut: req.body.dateDebut,
    dateFin: req.body.dateFin,
    price: req.body.price,
    maxParticapates: req.body.maxParticapates,
    location: req.body.location,
    description: req.body.description,
    imagePath: url + "/images/" + req.file.filename,
    creator: req.userData.userId
  });
  post
    .save()
    .then(created => {
      res.status(201).json({
        message: "Event added successfully",
        post: {
          ...created,
          id: created._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a event failed!"
      });
    });
};


exports.getEvents = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const Query = Event.find();
  let fetched;
  if (pageSize && currentPage) {
    Query.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  Query
    .then(documents => {
      fetched = documents;
      return Event.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Events fetched successfully!",
        events: fetched,
        maxPosts: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching events failed!"
      });
    });
};

exports.getEvent = (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => {
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ message: "event not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching event failed!"
      });
    });
};

exports.deleteEvent = (req, res, next) => {
  Event.deleteOne({ _id: req.params.id, creator: req.userData.userId })
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting posts failed!"
      });
    });
};

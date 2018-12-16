const Demand = require("../Models/Demand");

exports.createDemand = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const demand = new Demand({
    name: req.body.name,
    category: req.body.category,
    description : req.body.description,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    decoration: req.body.decoration,
    music: req.body.music,
    location: req.body.location,
    musictype: req.body.musictype
  });
  demand
    .save()
    .then(created => {
      res.status(201).json({
        message: "Demand added successfully",
        event: {
          ...created,
          id: created._id
        }
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Creating demand failed!"
      });
    });
};


exports.getDemands = (req, res, next) => {
  const Query = Demand.find();
  Query
    .then(documents => {
      res.status(200).json({
        message: "Demand fetched successfully!",
        demands: documents,
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching events failed!"
      });
    });
};

exports.getDemand = (req, res, next) => {
  Demand.findById(req.params.id)
    .then(demand => {
      if (demand) {
        res.status(200).json(demand);
      } else {
        res.status(404).json({ message: "demand not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching demand failed!"
      });
    });
};

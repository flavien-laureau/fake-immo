const Estate = require('../models/Estate');


exports.getAllEstates = (req, res, next) => {
  Estate.find()
    .then(estates => res.status(200).json(estates))
    .catch(error => res.status(400).json({
      error
    }));
};

exports.getOneEstateById = (req, res, next) => {
  Estate.findById(req.params.id)
    .then(estate => res.status(200).json(estate))
    .catch(error => res.status(400).json({
      error
    }))
}

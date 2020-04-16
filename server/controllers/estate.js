const Estate = require('../models/Estate');


exports.getAllItems = (req, res, next) => {
  Estate.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({
      error
    }));
};

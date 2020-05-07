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

exports.createEstate = (req, res, next) => {
  const estate = new Estate({
    ...JSON.parse(req.body.estate),
    img: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });

  estate.save()
    .then(() => res.status(201).json({
      ...estate._doc
      /*
      La propriété _doc contient toutes les informations situées dans la constante "estate" située ci dessus.
      On renvoie donc les infos à vue après les avoir enregistrées en bdd pour les afficher dynamiquement.
      */
    }))
    .catch(error => {
      res.status(400).json({
        error
      })
    });
}

exports.deleteEstate = (req, res, next) => {
  Estate.deleteOne({
      _id: req.params.id
    })
    .then(() => res.status(200).json({
      message: 'Suppression confirmée'
    }))
    .catch(error => {
      res.status(400).json({
        error,
        message: "ERREUR DELETE"
      })
    });
}

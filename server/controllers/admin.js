const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')


exports.register = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then(hash => {
      const admin = new Admin({
        email: req.body.email,
        password: hash
      });

      admin
        .save()
        .then(() =>
          res.status(201).json({
            message: "Administrateur créé !"
          })
        )
        .catch(error =>
          res.status(400).json({
            error
          })
        );
    })
    .catch(error =>
      res.status(500).json({
        error
      })
    );
};

exports.login = (req, res, next) => {
  Admin.findOne({
      email: req.body.email
    })
    .then(admin => {
      if (!admin) {
        return res.status(401).json("Administrateur non trouvé !");
      }
      bcrypt
        .compare(req.body.password, admin.password)
        .then(validator => {
          if (!validator) {
            return res.status(401).json("Mot de passe incorrect !");
          }
          res.status(200).json({
            adminId: admin._id,
            token: jwt.sign({
                adminId: admin._id
              },
              "RANDOM_TOKEN_SECRET", {
                expiresIn: '24h'
              }
            )
          });
        })
        .catch(error =>
          res.status(404).json({
            error
          })
        );
    })
    .catch(error =>
      res.status(500).json({
        error
      })
    );
};

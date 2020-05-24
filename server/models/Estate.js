const mongoose = require('mongoose');

const estateSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  author: {
    adminId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  type: {
    type: String,
    required: true
  },
  rooms: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  squareMeters: {
    type: Number,
    require: true
  },
  location: {
    line: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    postalCode: {
      type: Number,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  }
});

module.exports = mongoose.model('Estate', estateSchema);

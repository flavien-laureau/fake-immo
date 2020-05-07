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
});

module.exports = mongoose.model('Estate', estateSchema);

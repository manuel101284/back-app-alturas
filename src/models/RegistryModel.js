const mongoose = require('mongoose');

const RegistrySchema = new mongoose.Schema({
  nameRegistry: {
    type: String,
    required: true
  },
  emailRegistry: {
    type: String,
    required: true
  },
  phoneRegistry: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('RegistryModel', RegistrySchema);
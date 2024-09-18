const express = require('express');
const router = express.Router();
const AddNewRegistry = require('../controllers/AddNewRegistryController.js');

router
  .post("/addNewRegistry", AddNewRegistry.AddNewRegistry);

module.exports = router;
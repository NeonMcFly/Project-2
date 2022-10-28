const router = require('express').Router();
const { Costume, UserCostume } = require('../models');

// GET all galleries for homepage
router.get('/',(req, res) => {
    // find all categories
    // be sure to include its associated Products
    Costume.findAll({
     
    })
    .then(dbCostumeData => res.json(dbCostumeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;

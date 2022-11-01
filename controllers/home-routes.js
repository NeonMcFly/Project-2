const router = require('express').Router();

const { Costume, UserCostume } = require('../models');


// GET all galleries for homepage
router.get('/',(req, res) => {
    // find all categories
    // be sure to include its associated Products
    Costume.findAll({
     /* include:[
        {
          model: UserCostume,
          attributes:['scary_boolean']
        }
      ]*/
    })
    .then(dbCostumeData => res.json(dbCostumeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });


  router.get('/:id',(req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    Costume.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(dbCostumeData => {
        if (!dbCostumeData) {
          res.status(404).json({ message: 'No category found with this id'}); 
          return; 
        }
        res.json(dbCostumeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });




module.exports = router;
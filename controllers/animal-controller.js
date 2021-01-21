var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Animal = sequelize.import('../models/animal');

router.post('/create', function (req, res) {
    Animal.create({
        name: req.body.name,
        legNumber: req.body.legNumber,
        predator: req.body.predator
    })

    .then(function createSuccess(animal){
        res.json({
            name:animal,
            message: "Animal successfully created!"
        })
    })

    .catch(function createFail(err) {
        res.status(500).json({ error: err })
})
});

router.get("/", (req, res) => {
    Animal.findAll()
        .then(animals => res.status(200).json(animals))
        .catch(err => res.status(500).json({error: err}))
});

router.put("/update/:id", (req, res) => {
    const animalToUpdate = {
        name: req.body.name,
        legNumber: req.body.legNumber,
        predator: req.body.predator
    };
    const query = {where: {id: req.params.id}};
});

router.delete("/delete/:id", function (req, res) {
    const query = {where: { id: req.params.id}};

    Animal.destroy(query)
    .then(() => res.status(200).json({ message: "Animal has been deleted"}))
    .catch((err) => res.status(500).json({error: err}));

});

module.exports = router;








// Make a new '/create' endpoint in the animal-controller file.  It should save all the data from the animal model to the database, including # of legs, boolean predator value, and its name.
// If the animal is correctly saved in the database, inform the user. Otherwise, alert the user if there's an error.
// Make another '/' endpoint that will return all the animals created in the database. Like the others, send appropriate statuses based on if the request succeeds or not.
// When testing in postman you must use the request
// { "name": "alligator", "legNumber": 4, "predator": true}
  
// Complete the bronze challenge, then make a new '/delete' endpoint that will delete an animal from the database.  
// However you complete this challenge, a request must be able to specify which animal needs to be deleted.  
// If the delete was successful, inform the user, otherwise alert the user to an error.                    




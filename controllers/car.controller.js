const Car = require('../models/Car');

// Retrieve all Cars from the database
exports.findAll = (req, res) => {
    Car.find()
      .then(cars => res.json(cars))
      .catch(err => res.status(404).json({ nocarssfound: 'No Cars found'}));
}

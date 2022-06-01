const Car = require('../models/Car');

// Retrieve all Cars from the database
exports.findAllCars = (req, res) => {
    Car.find()
      .then(cars => res.json(cars))
      .catch(err => res.status(404).json({ nocarssfound: 'No Cars found'}));
}

// Retrieve a single Car from the database
exports.findOneCar = (req, res) => {
    Car.findById(req.params.id)
    .then(car => res.json(car))
    .catch(err => res.status(404).json({ nocarfound: 'No Car found' }));
}

// Create a new Car
exports.createCar = (req, res) => {
    Car.create(req.body)
    .then(car => res.json({ msg: 'Car added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this car' }));
}

// Update a Car
exports.updateCar = (req, res) => {
    Car.findByIdAndUpdate(req.params.id, req.body)
    .then(car => res.json({ 
        msg: 'Updated successfully'
    }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
}

// Delete a Car
exports.deleteCar = (req, res) => {
    Car.findByIdAndRemove(req.params.id, req.body)
    .then(car => res.json({ mgs: 'Car deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such Car' }));
}

const Car = require('../models/Car');

// Retrieve all Cars from the database
exports.findAllCars = (req, res) => {
    Car.find()
    .then(cars => res.json({
        success: true,
        cars: cars
    }))
    .catch(err => res.status(404).json({
        success: false,
        nocarssfound: err.message || 'No Cars found'
    }));
}

// Retrieve a single Car from the database
exports.findOneCar = (req, res) => {
    Car.findById(req.params.id)
    .then(car => res.json({
        success: true,
        car: car
    }))
    .catch(err => res.status(404).json({
        success: false,
        nocarfound: err.message || 'No Car found'
    }));
}

// Create a new Car
exports.createCar = (req, res) => {
    Car.create(req.body)
    .then(car => res.json({
        success: true,
        car: car
    }))
    .catch(err => res.status(400).json({
        success: false,
        error: err.message || 'Unable to add this car'
    }));
}

// Update a Car
exports.updateCar = (req, res) => {
    Car.findByIdAndUpdate(req.params.id, req.body)
    .then(car => res.json({
        success: true,
        msg: `Car with id=${req.params.id} updated successfully!`
    }))
    .catch(err => res.status(400).json({
        success: false,
        error: err.message || `Unable to update Car with id=${req.params.id} !`
    }));
}

// Delete a Car
exports.deleteCar = (req, res) => {
    Car.findByIdAndRemove(req.params.id, req.body)
    .then(car => res.json({
        success: true,
        mgs: `Car with id=${req.params.id} deleted successfully`
    }))
    .catch(err => res.status(404).json({
        success: false,
        error: err.message || 'Error: Could not delete and/or find Car'
    }));
}

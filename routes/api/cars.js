// routes/api/cars.js

const express = require('express');
const router = express.Router();

const CarController = require('../../controllers/car.controller');

// @route GET api/cars/test
// @description tests cars route
// @access Public
router.get('/test', (req, res) => res.send('car route testing!'));

// @route GET api/cars
// @description Get all cars
// @access Public
router.get('/', CarController.findAllCars);

// @route GET api/cars/:id
// @description Get single car by id
// @access Public
router.get('/:id', CarController.findOneCar);

// @route GET api/cars
// @description add/save car
// @access Public
router.post('/', CarController.createCar);

// @route PUT api/cars/:id
// @description Update car
// @access Public
router.put('/:id', CarController.updateCar);

// @route DELETE api/cars/:id
// @description Delete car by id
// @access Public
router.delete('/:id', CarController.deleteCar);

module.exports = router;
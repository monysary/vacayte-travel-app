const router = require('express').Router();

const yelpApi = require('./yelpApi');
const savedTripApi = require('./savedTripApi')

router.use('/yelp', yelpApi)
router.use('/savedTrip', savedTripApi)

module.exports = router;
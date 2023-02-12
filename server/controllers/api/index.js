const router = require('express').Router();

const yelpApi = require('./yelpApi');

router.use('/yelp', yelpApi)

module.exports = router;
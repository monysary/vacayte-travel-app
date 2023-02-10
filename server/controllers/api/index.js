const router = require('express').Router();

const yelpApi = require('./yelpApi');
const weatherApi = require('./weatherApi');

router.use('/yelp', yelpApi)
router.use('/weather', weatherApi)

module.exports = router;
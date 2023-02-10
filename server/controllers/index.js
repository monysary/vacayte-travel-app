const router = require('express').Router();

const yelpApi = require('./yelpApi.js');

router.use('/api', yelpApi);

module.exports = router;
require('dotenv').config()
const router = require('express').Router();

router.get('/', async (req, res) => {
    const { location, term } = req.query;
    const yelpEndpoint = `https://api.yelp.com/v3/businesses/search?limit=10&location=${location}&term=${term}&sort_by=rating`;
    const yelpAPIKey = process.env.YELP_KEY;

    try {
        const yelpFetch = await fetch(yelpEndpoint, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${yelpAPIKey}`
            }
        });

        const yelpData = await yelpFetch.json();

        res.status(200).json(yelpData);
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

});

router.get('/:id', async (req, res) => {
    const { businessID } = req.query;
    const yelpEndpoint = `https://api.yelp.com/v3/businesses/${req.params.id}`;
    const yelpAPIKey = process.env.YELP_KEY;

    try {
        const yelpFetch = await fetch(yelpEndpoint, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${yelpAPIKey}`
            }
        });

        const yelpData = await yelpFetch.json();

        res.status(200).json(yelpData)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})

module.exports = router;
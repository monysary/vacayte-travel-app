const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
})

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;
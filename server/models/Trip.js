const { Schema, model } = require('mongoose');

const tripSchema = new Schema({
    trip_name: {
        type: String,
        required: true,
        trim: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
});

const Trip = model('VacayteTrip', tripSchema);

module.exports = Trip;
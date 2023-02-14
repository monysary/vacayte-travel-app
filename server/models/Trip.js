const { Schema, model } = require('mongoose');

const tripSchema = new Schema({
    tripName: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    activities: [{
        type: String,
        required: true
    }]
});

const Trip = model('VacayteTrip', tripSchema);

module.exports = Trip;
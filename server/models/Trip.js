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
        name: {
            type: String,
            required: true,
        },
        saved: [{
            businessID: { type: String },
            businessName: { type: String },
            businessCategory: { type: String },
            businessRating: { type: Number },
            businessURL: { type: String },
        }]
    }]
});

const Trip = model('VacayteTrip', tripSchema);

module.exports = Trip;
const { Schema, model } = require('mongoose');

const activitySchema = new Schema({

});

const Activity = model('VacayteActivity', activitySchema);

module.exports = Activity;
const { Schema, model } = require('mongoose');

const activitySchema = new Schema({

});

const Activity = model('Activity', activitySchema);

module.exports = Activity;
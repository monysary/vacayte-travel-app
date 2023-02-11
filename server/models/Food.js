const { Schema, model } = require('mongoose');

const foodSchema = new Schema({

})

const Food = model('Food', foodSchema);

module.exports = Food;
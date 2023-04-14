const mongoose = require("mongoose");
console.log('--------------------------*-------');
// console.log(process.env.LOCAL_URI);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/vacayteDB',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
);

module.exports = mongoose.connection;

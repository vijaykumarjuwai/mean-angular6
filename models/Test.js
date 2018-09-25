const mongoose = require("mongoose");

var TestSchema = new mongoose.Schema({
    satTest: {
        name: String,
        testInstance: [{
            name: String,
            questions: [{
                "answer": String
            }]
        }]
    }
});

module.exports = mongoose.model('Test', TestSchema);

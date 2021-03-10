const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    macaddress: {
        type: String, 
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    when: {
        type: Date,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Business', businessSchema);
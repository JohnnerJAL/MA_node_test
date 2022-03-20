const mongoose = require('mongoose');

const PostalCode = new mongoose.Schema({
    location: {
        type: {
            type: String,
            default: 'Point',
        },
        coordinates: [Number], // Longitude, latitude
    },
    postalCode: Array,
    date: Date,
});

const model = mongoose.model('PostalCode', PostalCode);

module.exports = model;
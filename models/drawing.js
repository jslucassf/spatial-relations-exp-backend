const mongoose = require('../database');

const drawingSchema = new mongoose.Schema({
    userID: {
        type: Number,
        required: true
    },
    relation: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    geometry: {
        type: Object,
        required: true
    }
});

const Drawing = mongoose.model("Drawing", drawingSchema);

module.exports = Drawing;
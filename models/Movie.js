const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    plot: { type: String },
    poster: { type: String },
    actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],
    producer: { type: mongoose.Schema.Types.ObjectId, ref: 'Producer', required: true }
});

module.exports = mongoose.model('Movie', MovieSchema);

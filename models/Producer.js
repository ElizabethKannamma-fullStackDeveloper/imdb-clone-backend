const mongoose = require('mongoose');

const ProducerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    bio: { type: String }
});

module.exports = mongoose.model('Producer', ProducerSchema);

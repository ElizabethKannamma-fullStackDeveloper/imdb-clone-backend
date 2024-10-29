const mongoose = require('mongoose');

const ActorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    bio: { type: String }
});

module.exports = mongoose.model('Actor', ActorSchema);

const mongoose = require('mongoose');

const ConviteSchema = new mongoose.Schema({
    data: { type: String, default: Date },
    email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('ConviteModel', ConviteSchema)

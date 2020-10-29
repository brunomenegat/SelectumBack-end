const mongoose = require('mongoose');

const ConviteSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    data: { type: String, default: Date }
});

module.exports = mongoose.model('ConviteModel', ConviteSchema)

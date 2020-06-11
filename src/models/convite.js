const mongoose = require('mongoose');

const ConviteSchema = new mongoose.Schema({
    data: { type: String, default: Date },
    email: { type: String, required: true },
    token: { type: String, required: true },
});

module.exports = mongoose.model('Convite', ConviteSchema);

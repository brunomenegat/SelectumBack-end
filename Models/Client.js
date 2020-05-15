const mongoose = require('mongoose');
const ClientSchema = new mongoose.Schema({

nome: {
    type: String,
    require: true,
},
fone: {
    type: String,
    required: true,
},
createdAt: {
    type: Date,
    default: Date.now,
 },
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;
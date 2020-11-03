const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    pags: { type: String, required: true },
    editorial: { type: String, required: true },
    date: { type: String, required: true }
});

const Model = mongoose.model('Libros', mySchema);

module.exports = Model
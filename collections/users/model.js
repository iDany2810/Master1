const mongoose = require('mongoose');
const Schema = mongoose.Schema
const mySchema = new Schema({
    app: { type: String, required: true },
    apm: { type: String, required: true },
    name: { type: String, required: true },
    mail: { type: String, required: true },
    direction: { type: String },
    date: { type: String },
    hash: { type: String, required: true },
    dateOfAdmission: { type: String, required: true },
})

const Model = mongoose.model("Users", mySchema)

module.exports = Model
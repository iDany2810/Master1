const model = require('./model');
const db = require('mongoose');

db.connect("mongodb+srv://moises:moises1981frasier@clases.uhn67.mongodb.net/tienda?retryWrites=true&w=majority", { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true })
console.log("Conectado a Tienda");

const readItem = (fillteredItem) => {
    const result = model.find(fillteredItem)
    return result
}

const saveItem = (articuloNuevo) => {
    const myItem = new model(articuloNuevo)
    myItem.save()
}

// const removeItem = (idToRemove) => {
//     return model.findByIdAndRemove(idToRemove)
// }

// const updateItem = (idToUpdate, updateObject) => {
//     return model.findByIdAndUpdate(idToUpdate, updateObject)
// }

module.exports = {
    saveItem,
    readItem,
    // removeItem,
    // updateItem
}
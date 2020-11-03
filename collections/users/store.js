const model = require('./model');
const db = require('mongoose');
db.connect("mongodb+srv://moises:moises1981frasier@clases.uhn67.mongodb.net/tienda?retryWrites=true&w=majority")

const saveUser = (newUser) => {
    const myUser = new model(newUser)
    myUser.save()
    return myUser
}
const readUser = (filter) => {
    const result = model.find(filter)
    return result

}

module.exports = {
    saveUser,
    readUser
}
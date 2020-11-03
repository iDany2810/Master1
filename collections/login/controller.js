const { readUser } = require('../users/store');
const bcrypt = require('bcrypt');

const login = (mail, password) => {
    return new Promise((resolve, reject) => {
        if (!mail || !password) {
            reject("Datos incompletos")
        }
        const revisionDeUsuario = async() => {
            const userDB = await readUser({ mail: mail })
            if (userDB.length < 1) {
                reject("mail no se encuentra en DB")
            } else {
                let hash
                for (const value of userDB) {
                    hash = value.hash
                }
                bcrypt.compare(password, hash, function(err, result) {
                    if (err) throw new Error("bcrypt falle", err)
                    if (result == true) {
                        resolve("Bienvenido")
                    } else {
                        reject("Pasword incorrecto")
                    }
                });
            }
        }
        revisionDeUsuario()
    });
}

module.exports = {
    login
}
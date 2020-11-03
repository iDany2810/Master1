const bcrypt = require('bcrypt');
const moment = require('moment');
const { saveUser } = require('./store');

const postUser = (name, app, apm, mail, password, direction, date) => {
    return new Promise((resolve, reject) => {
        if (!name || !app || !apm || !mail || !password) {
            reject("Los campos obligatorios estan sin llenar")
        }
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) throw new Error("bcrypt dio error", err)
            const fullUser = {
                app,
                apm,
                name,
                mail,
                direction,
                date,
                hash,
                dateOfAdmission: moment().format("LLLL")
            }
            resolve(saveUser(fullUser))
        })
    });
}
module.exports = {
    //patchUser,
    //deleteUser,
    //   getUser,
    postUser
}
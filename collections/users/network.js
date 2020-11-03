const express = require('express');
const router = express.Router()
const { patchUser, deleteUser, getUser, postUser } = require('./controller');
const { error, success } = require('../../router/response');

router.post("/", (req, res) => {
    const app = req.query.app
    const apm = req.query.apm
    const name = req.query.name
    const mail = req.query.mail
    const password = req.query.password
    const direction = req.query.direction
    const date = req.query.date
    postUser(name, app, apm, mail, password, direction, date)
        .then(data => {
            success(req, res, data, 200)
        })
        .catch(e => {
            error(req, res, "Error Interno", 400, e)
        })

})

module.exports = router
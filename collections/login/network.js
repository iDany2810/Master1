const express = require('express');
const router = express.Router()
const { login } = require("./controller")
const { success, error } = require('../../router/response');

router.post("/", (req, res) => {
    const mail = req.query.mail
    const password = req.query.password
    login(mail, password)
        .then(data => {
            success(req, res, data, 200)
        })
        .catch(e => {
            error(req, res, e, 400, "Error en controllador")
        })

})
module.exports = router
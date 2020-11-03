const express = require('express');
const router = express.Router()
const { patchItem, deleteItem, getItem, postItem } = require('./controller');
const { error, success } = require('../../router/response');

router.get("/", (req, res) => {
    let flag = req.query.flag || null
    let fillter = req.query.filtro || null
    getItem(flag, fillter)
        .then(data => {
            success(req, res, data, 200, )
        })
        .catch(e => {
            error(req, res, "Error Interno", 400, e)
        })
})

router.post("/", (req, res) => {
    const titulo = req.query.titulo
    const autor = req.query.autor
    const pags = req.query.pags
    const editorial = req.query.editorial
    postItem(autor, titulo, pags, editorial)
        .then(data => {
            success(req, res, data, 200)
        })
        .catch(e => {
            error(req, res, "Error Interno", 400, e)
        })
})

// router.delete("/", (req, res) => {
//     deleteItem(req.query.id)
//         .then(data => {
//             success(req, res, data, 200)
//         })
//         .catch(e => {
//             error(req, res, "Error Interno", 400, e)
//         })
// })

// router.patch("/", (req, res) => {
//     let flag = req.query.flag || null
//     let fillter = req.query.filtro || null
//     let id = req.query.id || null
//     patchItem(id, flag, fillter)
//         .then(data => {
//             success(req, res, data, 200)
//         })
//         .catch(e => {
//             error(req, res, "Error Interno", 400, e)
//         })
// })

module.exports = router
const { updateItem, removeItem, readItem, saveItem } = require('./store');
const moment = require('moment');

const getItem = (flag, fillter) => {
    return new Promise((resolve, reject) => {
        let fillteredItem = {}
        if (flag && fillter) {
            if (flag === "titulo") {
                fillteredItem = { titulo: fillter }
            }
            if (flag === "autor") {
                fillteredItem = { autor: fillter }
            }
            if (flag === "pags") {
                fillteredItem = { pags: fillter }
            }
            if (flag === "editorial") {
                fillteredItem = { editorial: fillter }
            }
            if (flag === "id") {
                fillteredItem = { _id: fillter }
            }
        }
        resolve(readItem(fillteredItem))
    });
}

const postItem = (autor, titulo, pags, editorial) => {
    return new Promise((resolve, reject) => {
        if (!autor || !pags || !editorial) {
            reject("Le Faltan Datos")
        }
        const fullItem = {
            titulo,
            autor,
            pags,
            editorial,
            date: moment().format('LLLL'),
        }
        console.table(fullItem);
        resolve(fullItem)
        saveItem(fullItem)
    });
}

// const deleteItem = (id) => {
//     return new Promise((resolve, reject) => {
//         if (!id) {
//             reject("Falta id para poder borrar")
//         }
//         resolve(removeItem(id))
//     });
// }

// const patchItem = (id, flag, fillter) => {
//     return new Promise((resolve, reject) => {
//         if (!flag || !fillter || !id) {
//             reject("Faltan datos para poder hacer la edcion")
//         }
//         let fillteredItem = {}
//         if (flag && fillter && id) {
//             if (flag === "marca") {
//                 fillteredItem = { marca: fillter }
//             }
//             if (flag === "numeroDeTalla") {
//                 fillteredItem = { numeroDeTalla: fillter }
//             }
//             if (flag === "color") {
//                 fillteredItem = { color: fillter }
//             }
//             if (flag === "id") {
//                 fillteredItem = { _id: fillter }
//             }
//             if (flag === "modelo") {
//                 fillteredItem = { modelo: fillter }
//             }
//             if (flag === "precio") {
//                 fillteredItem = { precio: fillter }
//             }
//             if (flag === "detalles") {
//                 fillteredItem = { detalles: fillter }
//             }
//             if (flag === "descripcion") {
//                 fillteredItem = { descripcion: fillter }
//             }
//         }
//         resolve(updateItem(id, fillteredItem))
//     });
// }

module.exports = {
    postItem,
    getItem,
    // deleteItem,
    // patchItem
}
const item = require('../collections/items/network');
const users = require('../collections/users/network');
const login = require("../collections/login/network")

const routes = (server) => {
    server.use("/item", item)
    server.use("/users", users)
    server.use("/login", login)

}

module.exports = routes
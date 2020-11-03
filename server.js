const express = require('express')
const bodyParser = require('body-parser');
const router = require('./router/router');
const path = require('path');
const app = express()
const port = 3000

app.set("views", path.join(__dirname + "/views"))
app.set("view engine", "pug")

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
router(app)


app.listen(port, () => console.log(`listening on port ${port}!`))
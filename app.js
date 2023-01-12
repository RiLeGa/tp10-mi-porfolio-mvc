const express = require('express')
const html = require("html")
const app = express()
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, './public')))

app.set('views', __dirname, '/views'); // general config
app.set('view engine', 'html');

const mainrouter = require('./routers/main');

app.use('/', mainrouter);
app.use("/about", mainrouter)


app.listen(port, () => { console.log(`Servidor funcionando en http://localhost:${port}`) })

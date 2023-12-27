// Variáveis
const express = require('express')
const app = express()
const path = require('path')
const linkRouter = require("./Routes/linkRouter")
const cors = require("cors")
// const { link } = require('fs')
const spawn = require("child_process").spawn;

// Cors
app.use(cors())

// Use
app.use('/', express.static(path.join(__dirname, "templates")))
app.use('/', express.static(path.join(__dirname, "public")))
app.use('/', express.static(path.join(__dirname, "python")))


// Templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

// Rotas
app.get('/', linkRouter)
app.get('/dificuldade', linkRouter)
app.get('/game', linkRouter)
app.get('/login', linkRouter)

// API
app.get('/dificuldades_game', linkRouter)
app.get('/palavras_banco', linkRouter)
app.get('/python_sortear', sortear_py)

// Functions python
async function sortear_py(req, res) {
    var process = await spawn('python', ["./python/sortear_palavra.py",
        req.query.palavras]);
    process.stdout.on('data', function (data) {
        res.send(data.toString());
    })
}

// Inicialização servidor
app.listen(4242)
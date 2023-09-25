// Variáveis
const express = require('express')
const app = express()
const path = require('path')
const linkRouter = require("./Routes/linkRouter")
const cors = require("cors")
const spawn = require("child_process").spawn;

// Cors
app.use(cors())

// Use
app.use('/', express.static(path.join(__dirname, "templates")))
app.use('/', express.static(path.join(__dirname, "public")))

// Templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

// Rotas
app.get('/', linkRouter)
app.get('/dificuldade', linkRouter)
app.get('/game', linkRouter)

// API
app.get('/name', callName)

// Functions
function callName(req, res) {
    var process = spawn('python', ["./python/hello.py",
        req.query.firsname,
        req.query.lastname]);
    process.stdout.on('data', function (data) {
        res.send(data.toString());
    })
}

// Inicialização servidor
app.listen(4242)
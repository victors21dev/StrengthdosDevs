const express = require('express')
const router = express.Router()
const connectDataBase = require('../Controllers/database')
const app = express()
const cors = require("cors")

// Cors
app.use(cors())

// Templates
router.get('/', (req, res) => {
    res.render('inicial')
})
router.get('/dificuldade', async (req, res) => {
    res.render('dificuldade')
})
router.get('/game', (req, res) => {
    res.render('game')
})
router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/state', (req, res) => {
    res.render('loading')
})
router.get('/config', (req, res) => {
    res.render('config')
})

// API
router.get('/dificuldades_game', async (req, res) => {
    // Banco de dados
    let collection = await connectDataBase("Niveis")
    res.send(collection)
})


module.exports = router
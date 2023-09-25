const express = require('express')
const router = express.Router()
const connectDataBase = require('../Controllers/database')
const app = express()
const cors = require("cors")

// Cors
app.use(cors())

router.get('/', (req, res) => {
    res.render('inicial')
})
router.get('/dificuldade', async (req, res) => {
    // Banco de dados
    let collection = await connectDataBase("Words")
    res.send(collection)
    res.render('dificuldade')
})
router.get('/game', (req, res) => {
    res.render('game')
})
router.get('/dados', async (req, res) => {

})


module.exports = router
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('inicial')
})
router.get('/game', (req, res) => {
    res.render('game')
})

module.exports = router
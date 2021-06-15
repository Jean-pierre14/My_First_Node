const exp = require('express')
const router = exp.Router()
const monngoose = require('mongoose')
    // Schema config

router.get('/', (req, res) => {
    res.json('Data')
})
module.exports = router
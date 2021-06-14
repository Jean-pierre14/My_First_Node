const exp = require('express')
const router = exp.Router()

router.get('/', (req, res) => {
    res.render('pages/index', { title: 'Index page' })
})

router.post('/', (req, res) => {
    res.send("Post")
})

module.exports = router
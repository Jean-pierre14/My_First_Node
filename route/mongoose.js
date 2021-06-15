const exp = require('express')
const router = exp.Router()
const mongoose = require('mongoose')
const bp = require('body-parser')
const { success, error } = require('consola')

router.use(exp.urlencoded({ extended: true }))
    // Schema config
const Schema = mongoose.Schema
const schemaUser = new Schema({
    username: String,
    fullname: String,
    email: String
}, { collection: 'Users' })

const ModelUser = mongoose.model('User', schemaUser)
mongoose.connect('mongodb://localhost:27017/nodejs', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
    // To check th connection
db.on('error', console.error.bind(console, 'Connection error:'))
db.once('open', function() {
    success({ message: `Connected to mongodb`, badge: true })
})

router.get('/', (req, res) => {
    ModelUser.find((err, doc) => {
        if (err) throw err
        res.json(doc)
    })
})

router.post('/', (req, res) => {
    const { username, fullname, email } = req.body
})

module.exports = router
const exp = require('express')
const router = exp.Router()
const { getUsers, postUsers, updateUsers, deleteUsers } = require('../controllers/routersControllers')

router.get('/', getUsers)

router.post('/', postUsers)

router.put('/:id', updateUsers)

router.delete('/:id', deleteUsers)

module.exports = router
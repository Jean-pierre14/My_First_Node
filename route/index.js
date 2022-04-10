const exp = require('express')
const router = exp.Router()
const { getUsers, postUsers, updateUsers, deleteUsers } = require('../controllers/routersControllers')

router.route('/').get(getUsers).post(postUsers)


router.route('/:id').put(updateUsers).delete(deleteUsers)

module.exports = router
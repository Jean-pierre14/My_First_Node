const Student = require('../models/users');
/**
 * get all users
 * 
 */
const getUsers = async(req, res) => {
    res.status(200).json({ message: 'All users' })
}
/**
 * get all users
 * 
 */
const postUsers = async(req, res) => {
        const { username, fullname, email } = req.body

        if (!username && !fullname && !email) {
            res.status(400)
            throw new Error('Please add fileds')
        }
        res.status(200).json({ message: 'Create user' })
    }
    /**
     * get all users
     * 
     */
const updateUsers = async(req, res) => {
        res.status(200).json({ message: `Update user ${req.params.id}` })
    }
    /**
     * Delete user
     * 
     */
const deleteUsers = async(req, res) => {
    res.status(200).json({ message: `Delete user ${req.params.id}` })
}


module.exports = {
    getUsers,
    postUsers,
    updateUsers,
    deleteUsers
}
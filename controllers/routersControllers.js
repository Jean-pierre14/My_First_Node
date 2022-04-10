/**
 * get all users
 * 
 */
const getUsers = (req, res) => {
        res.status(200).json({ message: 'All users' })
    }
    /**
     * get all users
     * 
     */
const postUsers = (req, res) => {
        res.status(200).json({ message: 'Create user' })
    }
    /**
     * get all users
     * 
     */
const updateUsers = (req, res) => {
        res.status(200).json({ message: `Update user ${req.params.id}` })
    }
    /**
     * Delete user
     * 
     */
const deleteUsers = (req, res) => {
    res.status(200).json({ message: `Delete user ${req.params.id}` })
}


module.exports = {
    getUsers,
    postUsers,
    updateUsers,
    deleteUsers
}
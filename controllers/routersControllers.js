const getUsers = (req, res) => {
    res.status(200).json({ message: 'All users' })
}

module.exports = {
    getUsers
}
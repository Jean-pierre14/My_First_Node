const errorHandlers = (err, req, res, next) => {

    const statuCode = res.statuCode ? res.statuCode : 500

    res.status(statuCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })

}

module.exports = errorHandlers
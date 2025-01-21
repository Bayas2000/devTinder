const adminAuth = (req, res, next) => {
    const token = 'xyz'
    if (token === "xyz") {
        next()
    } else
        res.send('UnAuthorized Request...')
}

const userAuth = (req, res, next) => {
    const token = 'abcss'
    if (token === 'abc') {
        next()
    } else
        res.send('unAuthorized Request from User')
}


module.exports = {
    adminAuth,
    userAuth
}
const jwt = require('jsonwebtoken')

module.exports = function (req,res,next){
    const token = req.header('authorization-token')

    if(!token){
        res.status(401)
        res.send('Acess denied!')
    }else{
        try {
            const userVerified = jwt.verify(token, process.env.TOKEN_SECRET)
            req.user = userVerified
            next()
        } catch (error) {
            res.status(401)
            res.send('Acess denied!')
        }
    }
}

const express = require('express')
const router = express.Router()

const auth = require('../controllers/authController')


router.get('/',auth, (req,res) => {

    if(req.user.admin){
        res.send('Just a Admin can see this data!')
    }else{
        res.status(401)
        res.send('Not admin: Acess denied!')
    }
})



module.exports = router
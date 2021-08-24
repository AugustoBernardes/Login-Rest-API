const express = require('express')
const router = express.Router()
const userControler = require('../controllers/userControler')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
},
(error) => {
    if(error){
        console.log(error)
    }else{
        console.log('Mongo Connected')
    }
})

router.post('/register', userControler.register )
router.post('/login', userControler.login)

module.exports = router
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const {loginValidate, registerValidate} =  require('./validate')


const userControler = {
    register:async function (req,res){

        const {error} = registerValidate(req.body)
        if(error){
            res.status(400)
            res.send(error.message)
        }else{

            const selectedUser = await User.findOne({email:req.body.email})

            if(selectedUser){
                res.status(400)
                res.send('Email already exists')
            }else{
                const user = new User({
                    name:req.body.name,
                    email:req.body.email,
                    password:bcrypt.hashSync(req.body.password)
                })
        
                try {
                    const savedUser = await user.save()
                    res.send(savedUser)
                    
                } catch (error) {
                    res.status(400).send(error)
                }
            }

        }

    },

    login: async function (req,res){

        const {error} = loginValidate(req.body)
        if(error){
            res.status(400)
            res.send(error.message)
        }else{
            const selectedUser = await User.findOne({email:req.body.email})

            if(!selectedUser){
                res.status(400)
                res.send('Email or Password incorrect!')
            }else{
                const passwordAndUserMatch = bcrypt.compareSync(req.body.password, selectedUser.password)
    
                if(!passwordAndUserMatch){
                    res.status(400)
                    res.send('Email or Password incorrect!')
                }else{
                    const token = jwt.sign({id: selectedUser._id, admin:selectedUser.admin},process.env.TOKEN_SECRET)
    
                    res.header('authorization-token',token)
    
                    res.send('User logged')
                }
    
            }
        }
    }
}


module.exports = userControler
require('dotenv').config();
const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const adminRouter = require('./routes/adminRouter')


app.use('/user', express.json() , userRouter)

app.use('/admin', express.json(), adminRouter )

app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
})
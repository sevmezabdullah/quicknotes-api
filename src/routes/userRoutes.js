const express = require('express')
const { getAllUser } = require('../controllers/userController')
 const userRouter = express.Router()




userRouter.get('/all',getAllUser)


module.exports=userRouter


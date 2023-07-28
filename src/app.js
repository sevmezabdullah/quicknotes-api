const express = require('express');
const app = express()

const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');



 //Note Route
 app.use('/notes',noteRouter) 


 //User Route
app.use('/users',userRouter)


app.listen(3000,()=>{
    console.log("Server started on 3000");
})
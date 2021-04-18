require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require("./routes/userRouter")
const noteRouter = require("./routes/noteRouter")

const app = express()
app.use(cors())
app.use(express.json())

//routes
app.use('/users', userRouter)
app.use('/api/notes', noteRouter)


//connect to DB
const URI = process.env.MONGO_URL
mongoose.connect(URI, {
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}, err=> {if(err) throw err
 console.log('DB Connected');})

 //port
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log('Server is running ', PORT);
})

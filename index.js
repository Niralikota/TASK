require('dotenv').config()
const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/studentinfo',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connected to mongo db")
}).catch((error)=>{
    console.log("failed to connect",error)
});

const app = express()
const port = process.env.PORT || 3000;



app.get('/',(req,res)=>{
    res.send('hello this is project about a student management system this project is only work on API i did not add a any style and temlete engine in  a this project.')
})

app.use(bodyparser.urlencoded({extended:false}))

app.use(express.json())
app.use(express.static('public'))


app.set('view engine','ejs');

app.use("/",require('./router/student'))
app.use("/",require('./router/exam'))
app.use("/",require('./router/result'))
app.use("/",require('./router/report'))



app.listen(port,()=>{
    console.log(`sever is listen on ${port}`)
})
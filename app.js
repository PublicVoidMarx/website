const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const people = require('./routes/people')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.static('./public')) //home page

app.use(express.json())

app.use('/api/people',people)

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(
        __dirname,'index.html'))
})

app.get('/about',(req,res)=>{
    res.status(200).sendFile(path.join(
        __dirname,'about.html'))
})

app.post('/login',(req,res)=>{
    console.log(req.body)
    res.end('yes')
})

app.listen(3000,(req,res)=>{

})


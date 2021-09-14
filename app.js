const express = require('express')
const path = require('path')
const people = require('./routes/people')
const tasks = require('./routes/tasks')
const auth = require('./routes/auth')
const { get } = require('http')
const app = express()
const port = 3000

const coonectDB = require('./db/connect')
require('dotenv').config()

//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public')) 
app.use(express.json()) //lets you do "req.body"

//routers
app.use('/api/people',people)
app.use('/api/v1/tasks',tasks)
app.use('/login',auth)

//routes
app.get('/',(req,res)=>{
    res.status(200).sendFile(path.join(
        __dirname,'index.html'))
})

app.get('/about',(req,res)=>{
    res.status(200).sendFile(path.join(
        __dirname,'about.html'))
})

//wait to connect to database before start server
const start = async()=>{
    try {
        await coonectDB(process.env.MONGO_URI)       
        app.listen(port,(req,res)=>console.log('server listeening...'))
    } catch (error) {
        console.log(error)
    }
}
start()



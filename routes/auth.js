const express = require('express')
const app = express()
const router = express.Router()
const logger = require('../middleware/logger')
const authorize = require('../middleware/authorize')

router.get('/',[logger,authorize],(req,res)=>{
    const {user} = req.query
    res.send(`user has loged in as: ${user}`)
})

router.post('/',(req,res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('provide a username...')
})

module.exports = router
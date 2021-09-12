const express = require('express')
const router = express.Router()
const logger = require('../middleware/logger')
const authorize = require('../middleware/authorize')
const {people} = require('../data')

router.get('/login',[logger,authorize],(req,res)=>{
    res.json(people)
})

router.get('/',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

//usar parametros de la url para consulta
router.get('/:id',(req,res)=>{
    const {id} = req.params
    const person = people.find((people)=>people.id === Number(id))
    if (!person) {
        return res.status(404).send('Person does not exist')
    }
    //data = [person.id,person.email,person.name]
    return res.json(person)
})


//hacer consultas a partir de la url
router.get('/query',(req,res)=>{
    console.log(req.query)
    const {search,limit} = req.query
    let sortedPeople = [...people]

    if (search) {
        sortedPeople = sortedPeople.filter((people)=>{
            return people.id === Number(search) 
        })
    }
    if(limit){
        sortedPeople = sortedPeople.slice(0,Number(limit))
    }
    if(sortedPeople.length<1) {
        return res.status(200).json({succes:true,data:[]})
    }
    return res.status(200).json(sortedPeople)
})

module.exports = router

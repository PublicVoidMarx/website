const app = require('express')()
const path = require('path')
const {people} = require('./data')


app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index.html'))
})

app.get('/data/:peopleID',(req,res)=>{
    const {peopleID} = req.params
    const person = people.find((people)=>people.id === Number(peopleID))
    if (!person) {
        return res.status(404).send('Person does not exist')
    }
    //data = [person.id,person.email,person.name]
    return res.json(person)
})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    const {search,limit} = req.query
    let sortedPeople = [...people]

    if (search) {
        sortedPeople = sortedPeople.filter((people)=>{
            return people.id > search
        })
    }
    if(limit){
        sortedPeople = sortedPeople.slice(0,Number(limit))
    }
    if(sortedPeople.length<1) {
        //res.status(200).send('No products match query')
        return res.status(200).json({succes:true,data:[]})
    }
    res.status(200).json(sortedPeople)
})

app.listen(3000,(req,res)=>{

})


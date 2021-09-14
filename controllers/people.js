let {people} = require('../data')

const getPeople = (req,res)=>{
    res.status(200).json({success:true,data:people})
}

const createPeople = (req,res)=>{
    const {name} = req.body
    console.log(name)
    if(!name){
        return res
            .status(400)
            .json({succes:false,msg:'provide a username'})
    }
    res.status(201).send({succes:true,person:name})
}

const deletePeople = (req,res)=>{
    const person = people.find((person)=> person.id===Number(req.params.id))
    console.log(person)
    if(!person){
        return res
            .status(404)
            .json({success:false,msg:`no person with id :${req.params.id}`})
    }
    const newPerson = people.filter(
        (person)=> person.id !== Number(req.params.id)
    )
    return res.status(200).json({success:true,data:newPerson})
}

module.exports = {
    getPeople,
    createPeople,
    deletePeople
}
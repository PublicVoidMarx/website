const authorize = (req,res,next)=>{
    const {user} = req.query
    if (user == 'Ervin') {
        req.user = {name:'Ervin',id:3}
        next()
    }else{
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize
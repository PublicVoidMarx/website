// req => middleware => res         Midleware example
const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getDate()
    console.log(method,url,time)
    next()
}

module.exports = logger
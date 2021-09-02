const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to home page')
    }
    if(req.url === '/about'){
        res.end('lets talk about')
    }

})
server.listen(3000)



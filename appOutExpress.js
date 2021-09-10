const http = require('http')
const {readFileSync} = require('fs')

const homePage = readFileSync('./index.html')
const iconPage = readFileSync('./favicon.ico')

const server = http.createServer((req,res)=>{    
    const url = req.url
    if (url === '/') {  //home page
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }else if(url==='/about'){    //about page
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About page (html)</h1>')
        res.end()
    }else if(url==='/favicon.ico'){    //about page
        res.writeHead(200,{'content-type':'image/ico'})
        res.write(iconPage)
        res.end()
    }
    else{
        res.writeHead(400,{'content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }


})

server.listen(3000)
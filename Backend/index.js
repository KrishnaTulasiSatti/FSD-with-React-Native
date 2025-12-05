import http from 'http';

// const server = http.createServer((req,res) => {
    
//     res.writeHead(200,{"content-type" : "text/plain"});
//     res.end("Hello this is from backend");

// })

const server = http.createServer((req,res) => {

    if(req.url === "/users") {
         res.writeHead(200,{"content-type" : "application/json"});
         res.end(JSON.stringify({name : "tulasi"}));
    }
    else {
        res.writeHead(200,{"content-type" : "text/plain"});
        res.end("Hello this is from backend");
    }
    
    // Disadvantage of http so we use express 

})

server.listen(7007,() => {
    console.log(`server is running at port 7007`);
})
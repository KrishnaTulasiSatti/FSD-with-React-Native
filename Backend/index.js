// import http from 'http';

// // const server = http.createServer((req,res) => {
    
// //     res.writeHead(200,{"content-type" : "text/plain"});
// //     res.end("Hello this is from backend");

// // })

// const server = http.createServer((req,res) => {

//     if(req.url === "/users") {
//          res.writeHead(200,{"content-type" : "application/json"});
//          res.end(JSON.stringify({name : "tulasi"}));
//     }
//     else {
//         res.writeHead(200,{"content-type" : "text/plain"});
//         res.end("Hello this is from backend");
//     }
    
//     // Disadvantage of http so we use express 

// })

// server.listen(7007,() => {
//     console.log(`server is running at port 7007`);
// })

// import express from 'express';

// const app = express();

// // Middleware

// app.use(express.json()); 

// app.get('/',(req,res) => {
//     res.send("Hello this is from backend");
// })

// // app.get('/users',(req,res) => {
// //     res.send("You are in the path /users");
// // })

// app.post('/users',(req,res) => {
//     let data = req.body;
//     console.log(data);
//     res.send("Data is added");
// })


// app.listen(7007,() => {
//     console.log(`server is running at port 7007`);
// })

// npm i -g nodemon (No need of starting the server again when we made any changes)
// nodemon index.js

// http://localhost:7007/users

import express from 'express';

import studentRouter from './routers/studentRouter.js';

const app = express();

app.use(express.json());

app.use('/',studentRouter);

app.listen(8000,() => {
    console.log("Server is running");
})

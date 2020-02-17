const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'"],
      imgSrc:["'self'"],
      scriptSrc:["'self'"]
    }
  }))


app.get('/ipAddress',(request,response)=>{
    //response.header("Access-Control-Allow-Origin", "*");
    //response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(request.socket.remoteAddress);
    response.json({ipAddress:request.socket.remoteAddress})
});

app.listen(4000,()=>{
    console.log('IP Server Start');
})


/*
CSP와 CORS차이

CORS allows a site A to give permission to site B to read (potentially private) data from site A 
(using the visitor's browser and credentials).

CSP allows a site to prevent itself from loading (potentially malicious) content from unexpected sources
 (e.g. as a defence against XSS)

*/
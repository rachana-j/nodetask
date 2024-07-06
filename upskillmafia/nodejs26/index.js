const http=require('http');
const fs=require('fs')//type of module
const PORT=2000;//process.env.PORT;// we can also add this if we want it should run on available port

const home =fs.readFileSync("./index.html","utf-8");

const server=http.createServer((req,res)=>
{
    if(req.url==="/"){
        return res.end(home);
    }
    if(req.url==="/about"){     //if add about into url the page gets change
        return res.end("<h1>About page</h1>")
    }
    if(req.url==="/contact"){
        return res.end("<h1>Contact page</h1>")
    }
    else{
        return res.end("404 page Not found")
    }
});

server.listen(PORT,()=>{
    console.log("Working on port http://localhost:2000");
});
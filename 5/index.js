const http=require("http");

const myServer = http.createServer((req,res) => {
    console.log("new req received");
    res.end("Hello From Server");
    });
    
    myServer.listen(3000, () => console.log("server started"));

const http=require("http")
const server=http.createServer(function(req,res){
    res.write("This is my First Server")
    res.end("bye")
})
server.listen(4000)

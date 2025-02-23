const http = require('http')
const express = require('express');
const path = require('path')
const app = express();
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);
const PORT_NO = 9000;
// socket 

io.on("connection", (socket) => {
    socket.on("user-message",(message) =>{
        io.emit('message',message)
    })
});


//hello this is socket programming
app.use(express.static(path.resolve('./public')));
app.get('/',(req,res)=>{
    return res.sendFile('/public/index.html')
})
server.listen(PORT_NO,()=>{
    console.log("started on http://localhost:9000");
    console.log("embedded with version control");
})

//git@github.com:AmanRembersu/YoutubeDownloader.git
//ssh-keygen -t rsa -b 4096 -C "amanrembersu13@gmail.com"
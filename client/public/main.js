var io = require('socket.io'); 

const clientSocket = io.connect("http://localhost:3001") ;
alert("aaa");
if (socket !== undefined) {
    console.log("Connected to sockets!");
}
else{
    
}

/*clientSocket.on('message',function(data){
    console.log(data.message);
 });*/
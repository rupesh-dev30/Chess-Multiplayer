const socket = io();

socket.emit("rupesh")
socket.on("ritesh", ()=>{
  console.log("Recieved");
})